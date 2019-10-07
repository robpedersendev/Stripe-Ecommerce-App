import React from "react";

// import { Route } from "react-router-dom";
// <Route exact="Boolean-TrueByDefault" path='/RouteInUrl' component={WhatComponentWeWantToRender} />

// import { Switch } from "react-router-dom";
// //This allows for control over Routes

import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component";
import { auth } from "./firebase/firebase.utils";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
