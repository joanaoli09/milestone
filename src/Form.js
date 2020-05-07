import React from "react";
import "./Form.css";

export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    alert("Your information has been uploaded");
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: ""
    });
  };
  render() {
    return (
      <div className="formcontainer">
        <form className="Form">
          <p className="register">CREATE ACCOUNT</p>
          <input
            className="input"
            name="firstName"
            placeholder="First name"
            value={this.state.firstName}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            className="input"
            name="lastName"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            className="input"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            className="input"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={e => this.change(e)}
          />
          <br />
          <input
            className="input"
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={e => this.change(e)}
          />
          <br />
          <button className="submit" onClick={e => this.onSubmit(e)}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
