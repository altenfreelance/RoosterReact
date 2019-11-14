import React, { Component } from "react";

export default class NavHeader extends Component {
  render() {
    return (
      <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand">RR</h3>
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Shows
            </a>
            <a className="nav-link" href="#">
              Members
            </a>
            <a className="nav-link" href="#">
              Contact
            </a>
          </nav>
        </div>
      </header>
    );
  }
}
