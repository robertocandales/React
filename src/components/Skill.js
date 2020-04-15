import React, { useState } from 'react';
import '../Styles/skill.css';
import { useSpring, animated } from 'react-spring';

import Resume from './Resume';

function Skill() {
  const [style, setStyle] = useState();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const habilidades = [
    {
      name: 'HTML',
      porcentaje: 90,
    },
    {
      name: 'CSS',
      porcentaje: 90,
    },
    {
      name: 'Bootstrap / Material UI',
      porcentaje: 80,
    },
    {
      name: 'Javascript / ES6',
      porcentaje: 75,
    },
    {
      name: 'Reactjs / Hooks / Redux',
      porcentaje: 70,
    },
    {
      name: 'NodeJS / Express',
      porcentaje: 50,
    },
    {
      name: 'GiT / GitHub',
      porcentaje: 70,
    },
    {
      name: 'Mongodb',
      porcentaje: 40,
    },
    {
      name: 'Networking / Cisco / Hirshamnn',
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
    <div className="skills container ">
      <h1 id="skills" className="title">
        Skills
      </h1>
      <div className="skills-info">
        Here are some of my main technical skills, and keep in mind that I am continually motivated
        to keep improving and developing new skills.
      </div>

      {skills.map((t, index) => (
        <div className="row" key={index}>
          <div className="col">
            <button
              className="btn btn-outline-dark boton"
              onClick={() => click(index, t.porcentaje)}
            >
              {t.name}
            </button>
          </div>
          <div className="col">
            <div className="progress">
              <div className="progress-bar" style={selectedIndex === index ? style : {}}>
                {t.porcentaje}
                %
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="resume">
        <button className="btn btn-outline-dark mb-3 boton1" onClick={resume}>
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
