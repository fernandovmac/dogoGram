import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";

class ImageHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: [],
      isLoading: true
    };
    this.FetchImages = this.FetchImages.bind(this);
  }

  componentDidMount() {
    this.FetchImages();
    this.setState({ isLoading: false });
  }

  FetchImages() {
    axios
      .get(" https://dog.ceo/api/breeds/image/random")
      .then(json => this.setState({ imageUrl: json.data.message }));

    // .then(response => console.log(response));
    // console.log("success!", this.state.posts);
  }
  render() {
    return this.state.isLoading ? (
      <div style={{ maxHeight: "100px" }}>
        <p>I'm loading</p>
      </div>
    ) : (
      <div className="imageHeaderWrapper">
        <img
          src={this.state.imageUrl}
          // alt="userPost"
          className={"img-thumbnail" + " " + "imagePost"}
        ></img>
        <div className="middle">
          <div className="text">
            {this.props.postDate}
            {this.props.postLoc}
          </div>
        </div>
      </div>
    );
  }
}

export default ImageHeader;
