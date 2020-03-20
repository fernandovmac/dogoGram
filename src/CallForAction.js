import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

var Forward = require("react-fontawesome");
var Heart = require("react-fontawesome");
var Comment = require("react-fontawesome");

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { likesCounter: 0 };
  }
  render() {
    this.handleLikes = e => {
      this.setState({ likesCounter: this.state.likesCounter + 1 });
      console.log("me likey!");
    };
    return (
      <button
        type="button"
        className="btn btn-dark btn-sm"
        style={{ margin: "2px" }}
        onClick={this.handleLikes}
      >
        <Heart
          className="fas fa-heart"
          name="heart"
          // size="1x"
          style={{
            display: "inline",
            textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)"
          }}
        >
          {this.state.likesCounter}
        </Heart>
      </button>
    );
  }
}

class CallForAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likesCounter: 0
    };
  }
  render() {
    function ShareButton() {
      return (
        <button
          type="button"
          className="btn btn-dark btn-sm"
          style={{ margin: "2px" }}
        >
          <Forward
            className="fas fa-share"
            name="share"
            // size="1x"
            style={{
              display: "inline",
              textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)"
            }}
          >
            Share
          </Forward>
        </button>
      );
    }

    // function LikeButton() {
    //   return (
    //     <button
    //       type="button"
    //       className="btn btn-dark btn-sm"
    //       style={{ margin: "2px" }}
    //     >
    //       <Heart
    //         className="fas fa-heart"
    //         name="heart"
    //         size="1x"
    //         style={{
    //           display: "inline",
    //           textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)"
    //         }}
    //       >
    //         12
    //       </Heart>
    //     </button>
    //   );
    // }

    function CommentButton() {
      return (
        <button
          type="button"
          className="btn btn-dark btn-sm"
          style={{ margin: "2px" }}
        >
          <Comment
            className="fas fa-comment"
            name="comment"
            // size="1x"
            style={{
              display: "inline",
              textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)"
            }}
          ></Comment>
        </button>
      );
    }

    return (
      <div className={"wrapper-call_for_action" + " " + "container-md"}>
        <ShareButton></ShareButton>
        <LikeButton></LikeButton>
        <CommentButton></CommentButton>
      </div>
    );
  }
}

export default CallForAction;
