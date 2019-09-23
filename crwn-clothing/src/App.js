import React from "react";

// import { Route } from "react-router-dom";
// <Route exact="Boolean-TrueByDefault" path='/RouteInUrl' component={WhatComponentWeWantToRender} />

// import { Switch } from "react-router-dom";
// //This allows for control over Routes

import "./App.css";

import HomePage from "./pages/homepage/homepage.component.jsx";

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
