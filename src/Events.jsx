import React from "react";
import Event from "./Event";


export default function Events(){

    const cappys_12_20 = "images/cappys_12_20.jpg";
    const cappys_12_31 = "images/cappys_12_31.jpg";
    

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

