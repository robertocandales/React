import React, { useState } from "react";
import "../Styles/skill.css";

function Skill() {
  const [style, setstyle] = useState();
  const habilidades = [
    {
      name: "HTML",
      porcentaje: 90
    },
    {
      name: "CSS",
      porcentaje: 80
    },
    {
      name: "Javascript",
      porcentaje: 75
    },
    {
      name: "Reactjs",
      porcentaje: 70
    }
  ];
  const [skills, setskills] = useState(habilidades);
  const [a, seta] = useState(true);

  const click = (index, porcentaje) => {
    // e.preventDefault();

    console.log(a);
    console.log(index);
    console.log(porcentaje);
    const x = porcentaje;
    seta(!a);

    //a ?
       setTimeout(index => {
          const newStyle = {
            opacity: "1",
            width: `${x}%`
          };
          setstyle(newStyle);
        }, 100)
      // : setTimeout(() => {
      //     const newStyle = {
      //       opacity: "1",
      //       width: "0%"
      //     };
      //     setstyle(newStyle);
      //   }, 100);
  };

  return (
    <div className="skills container ">
      <h1 className="title">Skills</h1>
      <div className="skills-info">
        Passionate about the technology industry and changes in the software
        industry. I like how different teams of people discover interesting
        things to solve a specific problem or a specific customer requirement. I
        really enjoy learning programming languages and applying those concepts
        to help people have a more advanced and better world.
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
              <div className="progress-bar" style={style}>
                {t.porcentaje}%
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="row">
        {skills.map((t, index) => (
          <div className="col" key={index}>
            <button
              className="btn btn-outline-dark boton"
              onClick={() => click(index, t.porcentaje)}
            >
              {t.name}
            </button>
          </div>
        ))}

        {skills.map((t, index) => (
          <div className="col" key={index}>
            <div className="progress">
              <div className="progress-bar" style={style}>
                {t.porcentaje}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;
