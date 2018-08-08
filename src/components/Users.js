import React, { Component } from "react";
import { Card, Button, Collection, CollectionItem } from "react-materialize";

import Loader from "./Loader";

const API_URL =
  "https://cors-anywhere.herokuapp.com/https://limitless-basin-71329.herokuapp.com/users/";

class Users extends Component {
  state = {
    userArray: undefined,
    isLoading: true
  };

  loadUsers = async () => {
    this.setState({ isLoading: true });
    const api_call = await fetch(`${API_URL}`);
    let userArray = await api_call.json();
    userArray = userArray.users;
    console.log("Users.loadUsers() - userArray", userArray);
    this.setState({ userArray, isLoading: false });
  };

  componentDidMount = () => {
    this.loadUsers();
  };

  render() {
    console.log("Users.render() - this.state", this.state);

    const { userArray, isLoading } = this.state;

    if (isLoading) {
      return <Loader />;
    } else {
      return (
        <div>
          <Collection className="row red-text z-depth-2" header="Users">
            {userArray.map(user => {
              return (
                <CollectionItem className="col" key={user._id}>
                  <div className="col s2">
                    <Card className="green lighten-2 black-text">
                      {user.email}
                    </Card>
                  </div>
                  <div className="black-text col s10">{user.password}</div>
                </CollectionItem>
              );
            })}
          </Collection>
          <Button
            className="grey z-depth-2"
            onClick={this.loadUsers}
            waves="light"
          >
            Reload
          </Button>
        </div>
      );
    }
  }
}

export default Users;
