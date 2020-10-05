import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

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
          <button onClick={() => this.props.openModal('signup')}>Sign Up</button>
          <button onClick={() => this.props.openModal('login')}>Log In</button>

        </div>
      );
    }
  }

  render() {
    return (
      <nav className="navbar">
        <h1>CGDb</h1>
        {this.getLinks()}
      </nav>
    );
  }
}

export default Navbar;
