import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

//import { Footer } from "react-materialize";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Users from "./components/Users";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Login from "./components/Login";
import Http404 from "./components/Http404";

//import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="blue-grey darken-2 container">
          <br />
          <header>
            <Navigation />
          </header>

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/users" component={Users} />
            <Route path="/products" component={Products} />
            <Route path="/orders" component={Orders} />
            <Route path="/login" component={Login} />
            <Route component={Http404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
