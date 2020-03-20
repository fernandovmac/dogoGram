import React, { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ImageHeader from "./ImageHeader.js";
import CallForAction from "./CallForAction";
import CommentsTile from "./CommentsDropdown.js";
import PostNavBar from "./PostNavHeader.js";
// import P5Wrapper from "react-p5-wrapper";
import P5Sketch from "./P5Sketch.js";

// var P5Wrapper = require("react-p5-wrapper");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          postId: 1,
          postDate: "19/02/2018",
          postLoc: "São Paulo",
          commentUserName1: "Fernando",
          commentUserName2: "Maja"
        },
        {
          postId: 2,
          postDate: "20/03/2019",
          postLoc: "Ljubljana",
          commentUserName1: "Fernando",
          commentUserName2: "Maja"
        },
        {
          postId: 3,
          postDate: "2/06/1998",
          postLoc: "Koper",
          commentUserName1: "Pop",
          commentUserName2: "Milutchi"
        },
        {
          postId: 4,
          postDate: "2/06/2001",
          postLoc: "Piran",
          commentUserName1: "Pop",
          commentUserName2: "Milutchi"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.posts.map(postCard => (
          <div className="card" key={postCard.postId}>
            <PostNavBar></PostNavBar>
            <ImageHeader
              postDate={postCard.postDate}
              postLoc={postCard.postLoc}
            ></ImageHeader>
            <P5Sketch></P5Sketch>
            <CallForAction></CallForAction>
            <CommentsTile
              userName1={postCard.commentUserName1}
              userName2={postCard.commentUserName2}
            ></CommentsTile>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
