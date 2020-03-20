import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";
import axios from "axios";

var Avatar = require("react-fontawesome");

class PostNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorName: [],
      store: []
    };
    this.FetchAuthorName = this.FetchAuthorName.bind(this);
  }

  componentDidMount() {
    this.FetchAuthorName();
  }

  FetchAuthorName() {
    axios
      .get("https://randomuser.me/api/?results=10&inc=name,registered&nat=fr")
      .then(json =>
        this.setState({ authorName: json.data.results[0].name.first })
      )
      .catch(error => alert(error));
  }
  render() {
    function UserAvatar() {
      return (
        <button
          type="button"
          className="btn btn-dark btn-sm"
          style={{ margin: "2px" }}
        >
          <Avatar
            className="far fa-user"
            name="avatar"
            // size="1x"
            style={{
              display: "inline",
              textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)"
            }}
          ></Avatar>
        </button>
      );
    }
    return (
      <div className="postNavBarWrapper">
        <nav className="navbar navbar-dark bg-primary">
          <UserAvatar></UserAvatar>
          <a className="nav navbar-brand" href="#">
            {this.state.authorName}
          </a>
          <div className="dropdown">
            <button className="dropbtn">...</button>
            <div className="dropdown-content">
              <a href="#">Some action</a>
              <a href="#">Other Action</a>
              <a href="#">And more</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default PostNavBar;
