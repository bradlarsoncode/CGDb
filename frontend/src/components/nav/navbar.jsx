import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import logoPath from "../../assets/bramcollegeclear.png";
import "../landing/landing-page.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={"/profile"}>Profile</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          {/* <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link> */}
          <div className="btn-link">
            <button
              onClick={() => this.props.openModal("signup")}
              className="link-inner"
            >
              Sign Up
            </button>
          </div>
          <div className="btn-link">
            <button
              onClick={() => this.props.openModal("login")}
              className="link-inner"
            >
              Log In
            </button>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <nav className="navbar">
        <div className="logo-assets">
          <img src={logoPath} alt="logo" />
          <h1 className="brand-text">
            <span>W</span>elcome, <span>to</span> the <span>B</span>ram{" "}
            <span>C</span>ollege
          </h1>
        </div>
        {this.getLinks()}
      </nav>
    );
  }
}

export default Navbar;
