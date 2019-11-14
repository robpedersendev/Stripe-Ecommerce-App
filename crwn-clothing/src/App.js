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
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        //Create a new object with the data that we want and need for our application
        userRef.onSnapshot(snapshot => {
          this.setState(
            {
              currentUser: { id: snapshot.id, ...snapshot.data() }
            },
            () => {
              //Console.log needs to be a second parameter to make sure the actual setState method runs, since this is an Async/await function
              // console.log(this.state);
            }
          );
        });
      } else {
        this.setState({
          //Sets user to null if the user logs out
          currentUser: userAuth
        });
      }
    });
  }

  componentWillUnmount() {
    //Calling the unsubscribe function when the component is about to unmount is the best way to make sure we don't get any memory leaks in our application related to listeners still being open even if the component that cares about the listener is no longer on the page.
    this.unsubscribeFromAuth();
  }

  render() {
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
}

export default App;
