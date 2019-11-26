import React, { Component } from "react";
import Address from "./Address";

export default class Event extends Component {
  render() {
    let { name, time, img_url, date, address } = this.props;

    return (
      <div className="col-sm-6 p-3">
        <div className="card">
          <div className="container">
            <h4>
              <b>{name}</b>
            </h4>
            <div style={{ color: "black" }}>
              <h5>{new Date(date).toDateString()}</h5>
              <h5>{time}</h5>
            </div>
            <Address address={address} />
            <img
              src={img_url}
              alt={name}
              className="border border-dark"
              style={{ width: "100%"}}
            />
          </div>
        </div>
      </div>
    );
  }



}
