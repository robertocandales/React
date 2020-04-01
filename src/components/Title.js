import React from "react";
import image from './Image/stay.jpg'
import '../Styles/style.css'


function Title() {
  return (
    <div>
      <div className="contanier main-info-section">
        <div className="text">
          <h1>
            <span>H</span>
            <span className="m-left">i</span>
            <span className="m-left">,</span>
            <span className="m-left"> </span>
            <br />
            <span>I</span>
            <span className="m-left">'</span>
            <span className="m-left">m</span>
            <span className="m-left"> &nbsp;&nbsp;</span>
            <span className="name rob">R</span>
            <span className="m-left name rob">o</span>
            <span className="m-left name rob">b</span>
            <span className="m-left name rob">e</span>
            <span className="m-left name rob">r</span>
            <span className="m-left name rob">t</span>
            <span className="m-left name rob">o</span>
            <span className="m-left name rob">,</span>
            <br />
            <span>W</span>
            <span className="m-left name">e</span>
            <span className="m-left name">b &nbsp;&nbsp;</span>
            <span>D</span>
            <span className="m-left name">e</span>
            <span className="m-left name">v</span>
            <span className="m-left name">e</span>
            <span className="m-left name">l</span>
            <span className="m-left name">o</span>
            <span className="m-left name">p</span>

            <span className="m-left name">e</span>
            <span className="m-left name">r</span>
            <span className="m-left name">.</span>
          </h1>
          
          <p >HTML / CSS / Javascript / React</p>
          <a href="mailto:candales.roberto@gmail.com?Subject=Interesado%20en%20el%20curso">Contact me</a>
          
        </div>
        <div className="profile-image">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Title;
