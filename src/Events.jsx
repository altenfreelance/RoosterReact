import React, { Component } from "react";
import Event from "./Event";
import cappys_1 from "./images/group_color.jpg";
import cappys_12_20 from "./images/cappys_12_20.jpg";
import cappys_12_31 from "./images/cappys_12_31.jpg";


export default class Events extends Component {
  render() {
    return (
      <div>
        <h1>Upcoming Events</h1>
        <div className="row">
          <Event
            name="Cappys Wine and Spirits"
            date="12/20/2019"
            time="8:00pm to 11:00pm"
            address="309 W. Loveland Ave, Loveland, OH 45140"
            img_url={cappys_12_20}
          />
          <Event
            name="New Year's Eve with Cappys Wine and Spirits"
            date="12/31/2019"
            time="8:00pm to 11:00pm"
            address="309 W. Loveland Ave, Loveland, OH 45140"
            img_url={cappys_12_31}
          />
        </div>
      </div>
    );
  }
}
