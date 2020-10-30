import React from "react";
import CustomAlert from "../modal/alerts";
import { withRouter } from "react-router-dom";
import {resetSanity} from '../../util/user_api_util'
class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user);
  }

  handleClick(e) {
    e.preventDefault();

    let user = {
      email: "666@test.com",
      password: "password1",
    };
    resetSanity('666@test.com')
    this.props.login(user);
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        
        <form onSubmit={this.handleSubmit}>
          <div>
            <h3 className="modal-header">Log In</h3>
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
            />
            <br />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
            />
            <br />
            <input type="submit" value="Submit" className="btn-link" />
            {this.renderErrors()}
          </div>
        <input type="submit" className="btn-link" onClick={this.handleClick} value="Demo"/>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
