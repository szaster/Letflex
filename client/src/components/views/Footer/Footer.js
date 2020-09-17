import React from "react";
import { Menu } from "semantic-ui-react";

function Footer() {
  return (
    <div>
      <Menu
        size="large"
        fixed={"bottom"}
        className="footer"
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "1rem",
          justifyContent: "center",
        }}
      >
        &copy; Paschal, Carina, Svitlana, Elizabeth
      </Menu>
    </div>
  );
}

export default Footer;
