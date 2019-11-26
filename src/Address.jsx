import React, { Component } from "react";

export default class Address extends Component {
  render() {
    return (
      <p className="link" onClick={() => this.onMapClick()}>
        {this.props.address}
      </p>
    );
  }

  onMapClick() {
    let { address } = this.props;
    if (
      navigator.platform.indexOf("iPhone") !== -1 ||
      navigator.platform.indexOf("iPad") !== -1 ||
      navigator.platform.indexOf("iPod") !== -1
    ) {
      /* if we're on iOS, open in Apple Maps */
      window.open("http://maps.apple.com/?q=" + address);
    } else {
      /* else use Google */
      window.open("https://maps.google.com/maps?q=" + address);
    }
  }
}
