import React from "react";
import { Input, Segment, Menu } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  let history = useHistory();
  console.log(useHistory);

  var handleSearchSubmit = (e) => {
    if (e.keyCode == 13) {
      // if the key was the "enter" key
      console.log("value", e.target.value);
      let path = `/search?q=${e.target.value}`;
      history.push(path);
      history.push("/empty");
      history.replace(path);
    }
  };

  return (
    <Segment style={{ backgroundColor: "black" }}>
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
        <Menu.Item key="mail" as="a" href="/mylist">
          My List
        </Menu.Item>
        <Menu.Item key="mail" as="a" href="/moviedetails">
          Movie Details
        </Menu.Item>
        <Menu.Item>
          <Input
            className="icon"
            icon="search"
            placeholder="Search..."
            onKeyDown={handleSearchSubmit}
          />
        </Menu.Item>
      </Menu>
    </Segment>
  );
}

export default LeftMenu;
