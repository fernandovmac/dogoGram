import React, { Component } from "react";
import Sketch from "react-p5";

export default class P5Sketch extends Component {
  x = 50;
  y = 50;

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(280, 50).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    p5.noStroke();
    p5.rectMode(p5.CENTER);
  };
  draw = p5 => {
    p5.background(230);
    p5.fill(244, 122, 158);
    p5.rect(p5.mouseX, p5.height / 2, p5.mouseY / 2 + 10, p5.mouseY / 2 + 10);
    p5.fill(237, 34, 93);
    let inverseX = p5.width - p5.mouseX;
    let inverseY = p5.height - p5.mouseY;
    p5.rect(
      p5.inverseX,
      p5.height / 2,
      p5.inverseY / 2 + 10,
      p5.inverseY / 2 + 10
    );
  };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}
