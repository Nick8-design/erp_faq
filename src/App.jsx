// Import images and styles
import logo from "./assets/logo.jpg";
import hum from "./assets/hum.png";
import user from "./assets/usergroup.png";
import bell from "./assets/bellicon.png";
import "./App.css";
import React from "react";
import Topbar from "./components/Topbar";
import Contents from "./components/Contents";

function App() {
  return (
    <>
    <div id="container">
      <div id="title">
      <Topbar />
      </div>
   
      <div id="con">
       <Contents />

    </div>

    </div>
    </>
  );
}

export default App;
