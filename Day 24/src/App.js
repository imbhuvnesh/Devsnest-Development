import "./App.css";
import React, { useState } from "react";
import Home from "./Components/Home.js";
import Create from "./Components/Create";
import About from "./Components/About";

import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Components/Profile";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home isClicked={loggedIn} setisClicked={setLoggedIn}></Home>
            </Route>
            <Route path="/create">
              <Create></Create>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/profile">
              <Profile isClicked={loggedIn} setIsClicked={setLoggedIn} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
