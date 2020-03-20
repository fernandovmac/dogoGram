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
    let xspacing = 10; // Distance between each horizontal location
    let w; // Width of entire wave
    let theta = 0.0; // Start angle at 0
    let amplitude = 25.0; // Height of wave
    let period = 200.0; // How many pixels before the wave repeats
    let dx; // Value for incrementing x
    let yvalues; // Using an array to store height values for the wave

    p.setup = () => {
      p.createCanvas(280, 100);
      w = 500;
      dx = (1000 / period) * xspacing;
      yvalues = new Array(p.floor(32));
    };

    p.draw = () => {
      p.background(0);
      p.calcWave();
      p.renderWave();
    };

    p.calcWave = () => {
      // Increment theta (try different values for
      // 'angular velocity' here)
      theta += p.mouseX / 2000;

      // For every x value, calculate a y value with sine function
      let x = theta;
      if (
        p.mouseY >= 0 &&
        p.mouseY <= p.height &&
        p.mouseX >= 0 &&
        p.mouseX <= p.width
      ) {
        for (let i = 0; i < yvalues.length; i++) {
          yvalues[i] = p.sin(x) * (p.mouseY / 2);
          x += dx;
        }
      }
    };

    p.renderWave = () => {
      p.noStroke();
      p.fill(255);
      // A simple way to draw the wave with an ellipse at each location
      for (let x = 0; x < yvalues.length; x++) {
        p.ellipse(x * xspacing, 50 + yvalues[x], 16, 16);
      }
    };
  };

  render() {
    return <div className="p5CanvasTest" ref={this.myRef}></div>;
  }
}

export default P5Canvas;
