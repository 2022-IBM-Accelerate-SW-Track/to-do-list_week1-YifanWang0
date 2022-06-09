import React, { Component } from 'react';

import "./About.css";
import YifanWang_Headshot from "../assets/YifanWang_Headshot.jpeg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={YifanWang_Headshot}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Yifan Wang</div>
            <div className="brief_description">
              Hello! My name is Yifan Wang, and I am a rising junior at MIT majoring in Computation and Cognition.
              This summer I am participating in IBM Accelerate being part of the software track. 
            </div>
          </div>
        </div>
      </div>
    )
  }
}