import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavHeader extends Component {
  render() {
    return (
      <header className="sticky-top masthead rounded px-3 py-2">
        <div className="inner">
          <h3 className="masthead-brand">Rooster Ridge</h3>
          <nav className="nav nav-masthead justify-content-center">
            <NavLink to="/home" activeClassName="active" replace>
              Home
            </NavLink>
            <NavLink to="/shows" activeClassName="active" replace>
              Shows
            </NavLink>
            <NavLink to="/members" activeClassName="active" replace>
              Members
            </NavLink>
            <NavLink to="/contact" activeClassName="active" replace>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
}
