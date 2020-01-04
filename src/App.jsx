import React from "react";
import "./index.css";
import Footer from "./Footer";
import Members from "./Members";
import NavHeader from "./NavHeader";

import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
import Events from "./Events";
import VidContainer from './VidContainer';
import Contact from "./Contact";
import Songs from "./components/Songs"

function App() {
  const logo_img = 'images/RR_lemon.png'

  return (
    <div className="cover-container container-fluid text-center d-flex w-100 h-100 p-3 mx-auto flex-column">
      <Router>
        <NavHeader />
        <img
          className="logo-circle"
          alt="Rooster Ridge"
          src={logo_img}
        />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <VidContainer />
          </Route>
          <Route exact path="/shows">
            <Events />
          </Route>
          <Route exact path="/members">
            <Members />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/Music">
            <Songs src="audio/BloodInTheSoil.mp3"/>
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
