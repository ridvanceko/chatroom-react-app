import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import googleButton from './google_signin_buttons/web/1x/btn_google_signin_dark_disabled_web.png'
import googleButton from "./google_signin_buttons/web/1x/btn_google_signin_dark_normal_web.png";
import "./css/loginMain.css";

import LoginForm from "../../components/LoginForm";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null
    };
    // this.googleSignin = this.googleSignin.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  this.props._login(this.state.username, this.state.password);

  this.setState({
    redirectTo: "/chatroom"
  })
	
  }

  render() {
    if (this.props.loggedIn) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="LoginForm">
          {/*<h1>Login form</h1>*/}
          {/*<form>*/}
          {/*	<label htmlFor="username">Username: </label>*/}
          {/*	<input*/}
          {/*		type="text"*/}
          {/*		name="username"*/}
          {/*		value={this.state.username}*/}
          {/*		onChange={this.handleChange}*/}
          {/*	/>*/}
          {/*	<label htmlFor="password">Password: </label>*/}
          {/*	<input*/}
          {/*		type="password"*/}
          {/*		name="password"*/}
          {/*		value={this.state.password}*/}
          {/*		onChange={this.handleChange}*/}
          {/*	/>*/}
          {/*	<button onClick={this.handleSubmit}>Login</button>*/}
          {/*</form>*/}
          {/*<a href="/auth/google">*/}
          {/*	/!* <GoogleButton /> *!/*/}
          {/*	<img src={googleButton} alt="sign into Google Button" />*/}
          {/*</a>*/}

          <div className={"limiter"}>
            <div className={"container-login100"}>
              <div className={"wrap-login100"}>
                <div className={"login100-pic js-tilt"} data-tilt>
                  <img
                    src={require("./images/DARIO-hamjrs.png")}
                    className={"my-5"}
                    width="300px"
                    alt={"IMG.."}
                  />
                </div>
                <LoginForm
                  username={this.state.username}
                  password={this.state.password}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default LoginPage;
