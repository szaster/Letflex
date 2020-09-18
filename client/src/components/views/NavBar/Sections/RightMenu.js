/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Menu, Segment } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import GoogleAuth from "../../GoogleAuth";

function RightMenu(props) {
  return (
    <Segment style={{ backgroundColor: "black" }}>
      <Menu inverted secondary mode={props.mode}>
        <Menu.Item as="a" href="/about">
          About Us
        </Menu.Item>
        <Menu.Item>
          <GoogleAuth />
        </Menu.Item>
      </Menu>
    </Segment>
  );
}

export default withRouter(RightMenu);
