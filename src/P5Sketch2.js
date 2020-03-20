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
    let r, g, b;

    p.setup = () => {
      p.createCanvas(200, 100);
      p.background(200);

      r = p.random(255);
      g = p.random(255);
      b = p.random(255);
    };

    p.draw = () => {
      p.background(127);
      // Draw a circle
      p.strokeWeight(2);
      p.stroke(r, g, b);
      p.fill(r, g, b, 127);
      p.ellipse(30, 30, 50, 50);
    };

    p.mousePressed = () => {
      // Check if mouse is inside the circle
      let d = p.dist(p.mouseX, p.mouseY, 50, 50);
      if (d < 100) {
        // Pick new random color values
        r = p.random(255);
        g = p.random(255);
        b = p.random(255);
      }
    };
  };

  render() {
    return <div className="p5CanvasTest" ref={this.myRef}></div>;
  }
}

export default P5Canvas;
