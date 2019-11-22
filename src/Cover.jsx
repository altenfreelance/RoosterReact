import React, { Component } from "react";
import VidContainer from "./VidContainer";
export default class Cover extends Component {
  
  render() {
    
    return (
      <main role="main" className="inner cover">
        <h1 className="py-3 cover-heading">Porch Music</h1>
        
        <VidContainer />       
      </main>
    );
  }
}
