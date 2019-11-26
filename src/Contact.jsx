import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>

        <div className="card py-4 px-5">
          <h4>Want to Schedule an Event?</h4>
          <p>
            If you want to schedule Rooster Ridge or if you have any questions, please reach out to us
            on{" "}
            <a href="https://www.facebook.com/RoosterRidgeOfficial/">
              {" "}
              Facebook
            </a>
            , send us an email at
            <a href="mailto:roosterridgeofficial@gmail.com">
              {" "}
              roosterridgeofficial@gmail.com{" "}
            </a>
            or give us a call or text at{" "}
            <a href="tel:15138333889"> 513-833-3889</a>.
          </p>
        </div>
      </div>
    );
  }
}
