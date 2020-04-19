import React, { Component } from "react";
import p5 from "p5";

class P5Canvas extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myP5 = new p5(this.sketch, this.myRef.current);
  }

  sketch = p => {
    // Spring drawing constants for top bar
    let springHeight = 20,
      left,
      right,
      maxHeight = 100,
      minHeight = 50,
      over = false,
      move = false;

    // Spring simulation constants
    let M = 0.7, // Mass
      K = 0.7, // Spring constant
      D = 0.8, // Damping
      R = 40; // Rest position

    // Spring simulation variables
    let ps = R, // Position
      vs = 0.0, // Velocity
      as = 0, // Acceleration
      f = 0; // Force

    p.setup = () => {
      p.createCanvas(280, 100);
      p.rectMode(p.CORNERS);
      p.noStroke();
      left = p.width / 2 - 30;
      right = p.width / 2 + 30;
    };

    p.draw = () => {
      p.background(102);
      p.updateSpring();
      p.drawSpring();
    };

    p.drawSpring = () => {
      // Set color
      if (over || move) {
        p.fill(255, 94, 61);
      } else {
        p.fill(204);
      }
      // Draw base
      //   p.fill(0.2);
      let baseWidth = 2.5 * ps + 20;
      p.rect(
        p.width / 2 - baseWidth,
        ps + springHeight,
        p.width / 2 + baseWidth,
        p.height - 20,
        20
      );

      //   p.rect(left, ps, right, ps + springHeight);
    };

    p.updateSpring = () => {
      // Update the spring position
      if (!move) {
        f = -K * (ps - R); // f=-ky
        as = f / M; // Set the acceleration, f=ma == a=f/m
        vs = D * (vs + as); // Set the velocity
        ps = ps + vs; // Updated position
      }

      if (p.abs(vs) < 0.8) {
        vs = 0.0;
      }
      let baseWidth = 2.5 * ps + 20;

      if (
        p.mouseX > p.width / 2 - baseWidth &&
        p.mouseX < p.width / 2 + baseWidth &&
        p.mouseY > ps + springHeight &&
        p.mouseY < p.height
      ) {
        over = true;
      } else {
        over = false;
      }

      // Set and constrain the position of top bar
      if (move) {
        ps = p.mouseY - springHeight / 2;
        ps = p.constrain(ps, minHeight, maxHeight);
      }
    };

    p.mousePressed = () => {
      if (over) {
        move = true;
      }
    };

    p.mouseReleased = () => {
      move = false;
    };
  };

  render() {
    return <div className="p5CanvasTest" ref={this.myRef}></div>;
  }
}

export default P5Canvas;
