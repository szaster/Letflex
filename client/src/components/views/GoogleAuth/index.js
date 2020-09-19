import React from "react";
import "./style.css";
import { Button, Icon, Segment, Grid } from "semantic-ui-react";

import { connect } from "react-redux";

import { setUser } from "../../../_actions/authActions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.setUser();
  }

  render() {
    // const { isAuthenticated, user } = this.props.auth;
    return (
      <div>
        <Grid className="googleBtnWrapper" centered>
          <Segment inverted size="massive" padded>
            <Button
              as="a"
              href="/api/auth/google"
              // src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="signin"
              className="googleBtn"
              size="massive"
            >
              <Icon name="google" color="red" alt="signin" />
              Log in with Google
            </Button>
          </Segment>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: () => dispatch(setUser),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
