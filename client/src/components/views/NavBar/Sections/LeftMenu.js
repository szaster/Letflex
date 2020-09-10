import React from "react";
import { Input, Segment, Menu } from "semantic-ui-react";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Segment style={{ backgroundColor: "black" }}>
      <Menu inverted secondary mode={props.mode}>
        <Menu.Item key="mail" as="a" href="/">
          Home
        </Menu.Item>
        <Menu.Item key="mail" as="a" href="/blogs">
          Blogs
        </Menu.Item>
        <Menu.Item key="mail" as="a" href="/mylist">
          My List
        </Menu.Item>
        <Menu.Item>
          <Input className="icon" icon="search" placeholder="Search..." />
        </Menu.Item>
      </Menu>
    </Segment>
  );
}

export default LeftMenu;
