import React from "react";
import "./load.css";

import vid from '../../assets/load.mp4';

function Load() {
  return (
    <section className="loading-screen">
      <section className="mp4-container">
       <video className="loading-vid" src={vid} loop autoPlay muted></video>
       <h1 className="load-text">Preparing For Takeoff...</h1>
      </section>
   
    </section>
  );
}

export default Load;