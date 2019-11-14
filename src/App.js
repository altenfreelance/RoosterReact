import React from "react";
import "./index.css";
import Footer from "./Footer";
import Cover from "./Cover";
import NavHeader from "./NavHeader";

function App() {
  return (
      <div className="container text-center d-flex w-100 h-100 p-3 mx-auto flex-column">
      {/* <div className="cover-container text-center d-flex w-100 h-100 p-3 mx-auto flex-column"> */}
        <NavHeader/>
        <Cover/>
        <Footer/>
      </div>
  );
}

export default App;
