import React, { useState } from 'react';
import '../Styles/skill.css';
import { useSpring, animated } from 'react-spring';

import Resume from './Resume';

function Skill() {
  const [style, setStyle] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const habilidades = [
    {
      name: 'HTML / CSS / Javascript / ECMAScript 6',
      porcentaje: 95,
    },

    {
      name: 'Bootstrap / Material UI / React Navigation',
      porcentaje: 90,
    },

    {
      name: 'Reactjs / Hooks / Redux / React Native',
      porcentaje: 85,
    },
    {
      name: 'NodeJS / Express / Mongodb / API REST',
      porcentaje: 70,
    },
    {
      name: 'Firebase / Firestore',
      porcentaje: 90,
    },
    {
      name: 'GiT / GitHub',
      porcentaje: 90,
    },

    {
      name: 'Networking / Cisco (CCNA) / Hirshamnn',
      porcentaje: 90,
    },
  ];
  const [skills, setSkills] = useState(habilidades);
  const [a, seta] = useState(true);

  const click = (index, porcentaje) => {
    // e.preventDefault();

    // console.log(a);
    // console.log(index);
    // console.log(porcentaje);
    const x = porcentaje;
    seta(!a);
    setSkills(skills);
    // a ?
    setTimeout(() => {
      const newStyle = {
        opacity: '1',
        width: `${x}%`,
      };
      setSelectedIndex(index);
      setStyle(newStyle);
    }, 100);
    // : setTimeout(() => {
    //     const newStyle = {
    //       opacity: "1",
    //       width: "0%"
    //     };
    //     setStyle(newStyle);
    //   }, 100);
  };
  const [showResume, setshowResume] = useState(false);
  const resume = (e) => {
    setshowResume(!showResume);
  };

  const animatedResume = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 10,
    },
  });

  return (
    <div className=" container ">
      <div className="title">
        <h1>Skills</h1>
      </div>
      <div className="skills-info">
        Here are some of my main technical skills, and keep in mind that I am continually motivated
        to keep improving and developing new skills.
      </div>

      {skills.map((t, index) => (
        <div className=" sm-screen" key={index}>
          <div className="izq ">
            <button
              className="btn btn-outline-dark form-control izq-1"
              onClick={() => click(index, t.porcentaje)}
            >
              <div>{t.name}</div>
            </button>
          </div>
          <div className="bar">
            <div className="progress">
              <div className="progress-bar" style={selectedIndex === index ? style : {}}>
                {t.porcentaje}
                %
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* {skills.map((t, index) => (
        <div className="row" key={index}>
          <div className="col ">
            <button
              className="btn btn-outline-dark boton "
              onClick={() => click(index, t.porcentaje)}
            >
              <div>{t.name}</div>
            </button>
          </div>
          <div className="col ">
            <div className="progress">
              <div className="progress-bar" style={selectedIndex === index ? style : {}}>
                {t.porcentaje}
                %
              </div>
            </div>
          </div>
        </div>
      ))} */}

      <div className="resume">
        <button className="btn btn-outline-dark mb-3 form-control boton1" onClick={resume}>
          Resume
        </button>
      </div>

      <animated.div style={animatedResume}>
        {showResume ? <Resume showResume={showResume} /> : null}
      </animated.div>
    </div>
  );
}

export default Skill;
