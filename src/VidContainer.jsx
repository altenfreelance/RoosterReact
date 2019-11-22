import React, { Component } from "react";
import YouTube from "react-youtube";

export default class VidContainer extends Component {
  state = {
      newest_id:''
  }

    render() {
    const opts = {
      width: "100%",
      height: "500"
    };
    return <YouTube videoId={this.state.newest_id} opts={opts} />;
  }

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE0jXwLwL7T6zIoQCnHVUzw&maxResults=1&order=date&type=video&key=AIzaSyA1YtJvaAS53VWCfna1MRqJuJRYaba1OYo"
    )
      .then(response => response.json())
      .then(response =>
        this.setState({newest_id: response.items[0].id.videoId})
      );
  }
}
