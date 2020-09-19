import React from "react";
import "./style.css";
import { Button, Icon, Segment, Grid } from "semantic-ui-react";

class GoogleAuth extends React.Component {
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

export default GoogleAuth;
