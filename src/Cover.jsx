import React, { Component } from "react";
import YouTube from 'react-youtube';
export default class Cover extends Component {
  
  render() {
    const opts = {
      width: '100%',
      height: '500',
    }
    return (
      <main role="main" className="inner cover">
        <h1 className="py-3 cover-heading">Rooster Ridge</h1>

        <YouTube videoId="dCqgX598Xmo" opts={opts}/>
       
      </main>
    );
  }
}
