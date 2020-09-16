import React from "react";
import "./style.css";

import { connect } from "react-redux";

import { setCurrentUser } from "../../../_actions/authActions";

class GoogleAuth extends React.Component {
  async componentDidMount() {
    await this.props.setCurrentUser();
    console.log(this.props.setCurrentUser());
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <div>
        {isAuthenticated ? (
          <div>
            <br />
            <h2 className="display-5 mb-4">Welcome, {user.name}</h2>
          </div>
        ) : (
          <a href="/api/auth/google">
            <div className="google-btn">
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="signin"
                />
              </div>
              <p className="btn-text">
                <b>Log in with Google</b>
              </p>
            </div>
          </a>
        )}
        ;
      </div>
    );
  }
}

export default GoogleAuth;
