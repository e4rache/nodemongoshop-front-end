import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "react-materialize";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <Link className="col s12 m3" to="users">
          <Button waves="light">
            Users
            <Icon small left>
              supervisor_account
            </Icon>
          </Button>
        </Link>
        <Link className="col s12 m3" to="products">
          <Button waves="light">
            Products
            <Icon small left>
              store
            </Icon>
          </Button>
        </Link>
        <Link className="col s12 m3" to="orders">
          <Button waves="light">
            Orders
            <Icon small left>
              shopping_cart
            </Icon>
          </Button>
        </Link>
        <Link className="col s12 m3" to="login">
          <Button waves="light">
            Login
            <Icon small left>
              account_box
            </Icon>
          </Button>
        </Link>
      </div>
    );
  }
}

export default Navigation;
