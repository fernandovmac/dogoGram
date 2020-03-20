import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import "./App.css";

class CommentsShowButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const show = this.props.showComments ? "Hide Comments" : "See Comments";

    return (
      <div className="card" style={{ maxWidth: "300px", margin: "auto" }}>
        <div className="card-header">
          {/* <h2 className="mb-0">See comments</h2> */}
          <button
            className="btn btn-dark btn-sm"
            type="button"
            onClick={this.props.toggleMenu}
          >
            {show}
          </button>
        </div>
      </div>
    );
  }
}

class CommentsAccordion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const show = this.props.showComments ? "show" : "";

    const userName1 = this.props.userName1;
    const userName2 = this.props.userName2;

    const InternalWrapper = styled.div`
      width: 100%;
      max-height: ${props => (show ? "300px" : "0")};
      /* transition: all 1s ease-in-out; */
      -webkit-transition: all 2s ease;
      -moz-transition: all 2s ease;
      transition: all 2s ease;
      overflow: hidden;
    `;

    return (
      <div className={"comments " + show}>
        <div className="media">
          {/* <div className="collapse show"> */}
          <img
            src="https://picsum.photos/40"
            className={"align-self-center mr-3" + " " + "img-thumbnail"}
            alt="..."
          ></img>
          <div className="media-body">
            <h5
              className="mt-0"
              style={{ textAlign: "left", fontSize: "12px" }}
            >
              {userName1}
            </h5>
            <p style={{ fontSize: "10px", textAlign: "left" }}>
              {" "}
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </div>
        </div>
        <div className="media">
          <img
            src="https://picsum.photos/40"
            className={"align-self-center mr-3" + " " + "img-thumbnail"}
            alt="..."
          ></img>
          <div className="media-body">
            <h5
              className="mt-0"
              style={{ textAlign: "left", fontSize: "12px" }}
            >
              {userName2}
            </h5>
            <p style={{ fontSize: "10px", textAlign: "left" }}>
              {" "}
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </div>
        </div>
      </div>
      //   </div>
    );
  }
}

class CommentsTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({ showComments: !this.state.showComments });
    console.log("show comments");
  }
  render() {
    return (
      <div className="commentsWrapper">
        <CommentsShowButton
          toggleMenu={this.toggleMenu}
          showComments={this.state.showComments}
        ></CommentsShowButton>
        <CommentsAccordion
          showComments={this.state.showComments}
          userName1={this.props.userName1}
          userName2={this.props.userName2}
        ></CommentsAccordion>
      </div>
    );
  }
}

export default CommentsTile;
