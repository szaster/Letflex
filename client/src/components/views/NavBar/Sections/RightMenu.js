/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
//import { Menu } from 'antd';
import { Menu, Segment } from "semantic-ui-react";
import axios from "axios";
import { USER_SERVER } from "../../../Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function RightMenu(props) {
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <Segment style={{ backgroundColor: "black" }}>
        <Menu inverted secondary mode={props.mode}>
          <Menu.Item key="mail" as="a" href="/login">
            Signin
          </Menu.Item>
          <Menu.Item key="app" as="a" href="register">
            Signup
          </Menu.Item>
          <Menu.Item as="a" href="/about">
            About Us
          </Menu.Item>
        </Menu>
      </Segment>
    );
  } else {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(RightMenu);
