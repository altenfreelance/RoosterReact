import React from "react";
import "./index.css";
import Footer from "./Footer";
import Cover from "./Cover";
import NavHeader from "./NavHeader";
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import Events from "./Events";

function App() {
  return (
    <div className="container text-center d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Router>
        <NavHeader />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <Cover />
          </Route>
          <Route exact path="/shows">
            <Events />
          </Route>
          <Route exact path="/members">
            <p>members will be here</p>
            {/* <Members /> */}
          </Route>
          <Route exact path="/Contact">
            <p>contact will be here</p>
            {/* <Contact /> */}
          </Route>
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
        <Footer />
      </Router>

      {/* <Events /> */}
    </div>
  );
}

export default App;
