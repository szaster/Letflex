import React from "react";
import { Image, Label } from "semantic-ui-react";

import { connect } from "react-redux";

class Welcome extends React.Component {
  render() {
    return (
      <Label as="a" color="black" image>
        <Image floated="left" avatar="true" src={this.props.user.image} />
        <Label.Detail>Welcome,</Label.Detail>
        {"  " + this.props.user.firstName}
      </Label>
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
