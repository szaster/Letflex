import React from "react";
import { Input, Menu } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import Welcome from "../Welcome";

function MainNavbar(props) {
  let history = useHistory();
  console.log(useHistory);

  var handleSearchSubmit = (e) => {
    if (e.keyCode === 13) {
      // if the key was the "enter" key
      console.log("value", e.target.value);
      let path = `/search?q=${e.target.value}`;
      history.push(path);
      history.push("/empty");
      history.replace(path);
    }
  };
  return (
    <Menu
      inverted
      fixed={"top"}
      style={{ backgroundColor: "black" }}
      mode={props.mode}
    >
      <Menu.Item as="a" href="/">
        <img class="ui small image" src="../logo.png" alt="logo"></img>
      </Menu.Item>
      <Menu.Item key="mail" as="a" href="/">
        Home
      </Menu.Item>
      <Menu.Item key="mail" as="a" href="/blogs">
        Blogs
      </Menu.Item>
      <Menu.Item key="mail" as="a" href="/favorite">
        My Favorites
      </Menu.Item>

      <Menu.Item>
        <Input
          className="icon"
          icon="search"
          placeholder="Search Movies"
          onKeyDown={handleSearchSubmit}
        />
      </Menu.Item>

      <Menu.Item position="right">
        <Welcome />
      </Menu.Item>
    </Menu>
  );
}

export default MainNavbar;
