import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

class IntroNavbar extends Component {
  state = { activeItem: "intro" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted fixed={"top"} style={{ backgroundColor: "black" }}>
        <Menu.Item
          as={Link}
          to="/"
          name="intro"
          active={activeItem === "intro"}
          onClick={this.handleItemClick}
        >
          <img className="ui small image" src="../logo.png" alt="logo"></img>
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/about"
          name="about"
          active={activeItem === "about"}
          onClick={this.handleItemClick}
        >
          About Us
        </Menu.Item>
      </Menu>
    );
  }
}

export default IntroNavbar;
