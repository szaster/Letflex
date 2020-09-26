import React from "react";
import { Input, Menu } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import Welcome from "../Welcome";
// const { Media } = createMedia({
//   breakpoints: {
//     mobile: 0,
//     tablet: 768,
//     computer: 1024,
//   },
// });

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
      stackable
      inverted
      fixed={"top"}
      style={{ backgroundColor: "black" }}
      mode={props.mode}
    >
      <Menu.Item as="a" href="/">
        <img className="ui small image" src="../logo.png" alt="logo"></img>
      </Menu.Item>
      <Menu.Item as="a" href="/">
        Home
      </Menu.Item>
      <Menu.Item as="a" href="/blogs">
        Blogs
      </Menu.Item>
      <Menu.Item as="a" href="/favorite">
        My List
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
