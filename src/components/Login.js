import React, { Component } from "react";
import { Row, Input, Button } from "react-materialize";

import Loader from "./Loader";

const API_URL =
  "https://cors-anywhere.herokuapp.com/https://limitless-basin-71329.herokuapp.com/users/signin";

class Login extends Component {
  state = {
    isLoading: false,
    authenticated: false
  };

  login = async e => {
    this.setState({ isLoading: true });
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    console.log("Login.login() - email password ", email, password);

    const postData = { email: email, password: password };

    const api_call = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    });
    const data = await api_call.json();
    console.log("Login.login() - data", data);
    this.setState({ isLoading: false });
  };

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    } else {
      return (
        <div>
          <p>Enter your credentials</p>
          <form onSubmit={this.login}>
            <Row>
              <Input
                name="email"
                type="email"
                s={4}
                label="Email"
                defaultValue="c@c.c"
              />
            </Row>
            <Row>
              <Input
                name="password"
                type="password"
                s={4}
                label="Password"
                defaultValue="c"
              />
            </Row>
            <Row>
              <Button type="submit">Submit</Button>
            </Row>
          </form>
        </div>
      );
    }
  }
}

export default Login;
