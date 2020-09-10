import React from "react";
import { Menu } from "antd";

function Footer() {
  return (
    <div>
      <Menu
        size="large"
        className="footer"
        fixed={"bottom"}
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        &copy; Paschal, Carina, Svitlana, Elizabeth
      </Menu>
    </div>
  );
}

export default Footer;
