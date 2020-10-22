import React from "react";
import CustomAlert from "../modal/alerts";
import {resetSanity} from '../../util/user_api_util'
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
    if (this.props.currentUser.email === '666@test.com'){
      resetSanity('666@test.com')
    }
    this.props.alertLogout();
    this.props.logout();
  }
  
  componentDidUpdate (prevProps) {
    if (prevProps.loggedIn !== this.props.loggedIn && this.props.loggedIn) {
      this.props.alertLogin(this.props.currentUser.name);
    } 
  }

  getLinks() {
    if (this.props.loggedIn) {
      return (
        <nav className="navbar">
          <div className="logo-assets">
            <img src={logoPath} alt="logo" />
            <h1 className="brand-text">
              <span>Welcome</span> {this.props.currentUser.name}
            </h1>
          </div>
          <div>
            <div className="btn-link">
              <button
                onClick={() => this.props.openModal("profile")}
                className="link-inner"
              >
                Profile
              </button>
            </div>
            <div className="btn-link">
              <button onClick={this.logoutUser} className="link-inner">
                Logout
              </button>
            </div>
            <div className="btn-link">
              <button
                onClick={() => this.props.openModal("links")}
                className="link-inner"
              >
                About Us
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
            <div className="btn-link">
              <button
                onClick={() => this.props.openModal("links")}
                className="link-inner"
              >
                About Us
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
