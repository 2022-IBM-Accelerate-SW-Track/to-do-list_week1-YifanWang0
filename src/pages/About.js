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
              I am participating in IBM Accelerate as part of the software track! This summer, along with this program, 
              I am also interning at Twitter as a software engineer intern. I am very interested in computer science, 
              but in particular I would love to learn more about machine learning and artificial intelligence.

              During my free time, I like to watch TV shows, do arts and crafts, listen to music, and explore different 
              places (and foods!) with friends. Also, a fun fact about me: I have never read nor watched any of the Harry
              Potter series.
            </div>
          </div>
        </div>
      </div>
    )
  }
}