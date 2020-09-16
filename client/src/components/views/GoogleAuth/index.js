import React from "react";
import "./style.css";

class GoogleAuth extends React.Component {
  render() {
    return (
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
    );
  }
}

export default GoogleAuth;
