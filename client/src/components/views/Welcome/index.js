import React from "react";
import { Image, Label, Dropdown, Divider, Item } from "semantic-ui-react";

import { connect } from "react-redux";

class Welcome extends React.Component {
  render() {
    //     const trigger = [
    // {
    //   key:"Welcome",
    //   text:{"Welcome," + "  " + this.props.user.firstName},
    //   image:{floated="left", avatar="true", src={this.props.user.image}}
    // }

    //     ]

    // const options = [
    // {
    //   key:"Welcome",
    //   text:{"Welcome," + "  " + this.props.user.firstName},
    //   image:{floated="left", avatar="true", src={this.props.user.image},
    // },

    //     ]
    const trigger = (
      <span>
        <Image
          floated="left"
          avatar="true"
          src={this.props.user.image}
          style={{ margin: ".5rem auto" }}
        />

        <Item>{"Welcome," + " " + this.props.user.firstName}</Item>
      </span>
    );

    return (
      <div>
        <Dropdown style={{ marginRight: ".5rem" }} item trigger={trigger}>
          <Dropdown.Menu>
            <Dropdown.Item disabled>
              <span>Signed in as {this.props.user.firstName}</span>
            </Dropdown.Item>

            <Dropdown.Item
              as="a"
              href="api/auth/logout"
              style={{ backgroundColor: "black" }}
            >
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      // <Label style={{ backgroundColor: "black" }} image size="large">
      //
      //   <Label.Detail>Welcome,</Label.Detail>
      //   {"  " + this.props.user.firstName}
      // </Label>
    );
  }
}

// Function that maps full Redux store (state) to the props of
// Welcome component
function mapStatesToProps(state) {
  return {
    user: state.auth.user,
  };
}

// Connecting component to redux state
export default connect(mapStatesToProps)(Welcome);
