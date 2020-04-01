import React from 'react'
import cv from "./Image/0001.jpg";
import "../Styles/skill.css";
import { useSpring, animated } from "react-spring";



function Resume() {

    
    const style = useSpring ({
        from: {
            opacity: 0
          },
          to: {
            opacity: 10
          }
    })  

    return (
        <animated.div style={style} className="resume">
            <div className="cv">
        <img src={cv} alt="" />
      </div>
        </animated.div>
    )
}

export default Resume
