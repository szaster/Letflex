import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

function RightMenu() {
  return (
    <Segment style={{ backgroundColor: "black" }}>
      <Menu inverted fixed={"top"} style={{ backgroundColor: "black" }}>
        <Menu.Item as="a" href="/">
          <img class="ui small image" src="../logo.png" alt="logo"></img>
        </Menu.Item>
        <Menu.Item as="a" href="/about">
          About Us
        </Menu.Item>
      </Menu>
    </Segment>
  );
}

export default withRouter(RightMenu);
