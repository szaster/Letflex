import React from "react";
import "./style.css";

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
      // <div>
      //   {isAuthenticated ? (
      //     <div>
      //       <br />
      //       <h2 className="display-5 mb-4">Welcome, {user.name}</h2>
      //     </div>
      //   ) : (
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
      //   )}
      //   ;
      // </div>
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
