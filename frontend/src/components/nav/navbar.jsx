import React from "react";
import CustomAlert from "../modal/alerts";

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
    this.props.alertLogout();
    this.props.logout();
  }

  getLinks() {
    if (this.props.loggedIn) {
      this.props.alertLogin(this.props.currUser.name);
      return (
        <nav className="navbar">
          <div className="logo-assets">
            <img src={logoPath} alt="logo" />
            <h1 className="brand-text">
              <span>Welcome</span> {this.props.currUser.email}
            </h1>
          </div>
          <div>
            <div className="btn-link">
              <Link to={"/profile"}>
                <button className="link-inner">Profile</button>
              </Link>
            </div>
            <div className="btn-link">
              <button onClick={this.logoutUser} className="link-inner">
                Logout
              </button>
            </div>
          </div>
          <CustomAlert />
        </nav>
      );
    } else {
      return (
        <nav className="navbar">
          <div className="logo-assets">
            <img src={logoPath} alt="logo" />
            <h1 className="brand-text">
              <span>Welcome</span> to the <span>C</span>ognitive <span>G</span>
              enetics <span>D</span>ata<span>b</span>ase
            </h1>
          </div>
          <div>
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
          <CustomAlert />
        </nav>
      );
    }
  }

  render() {
    return this.getLinks();
  }
}

export default Navbar;
