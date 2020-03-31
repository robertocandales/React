import React from "react";
import { useSpring, animated } from 'react-spring'

function Mostrar(props) {
 // const [deletee, setdeletee] = useState([]);

  const fade = useSpring({
    from: {
      opacity:0
    },
    to: {
      opacity:1
    }

  })
  console.log(fade)

  return (
    <animated.div className="container text-center  my-2" style={fade}>
      {props.input.map((t, index) => (
        <div key={index}>
          <h5>{t.firstname}  {t.lastname} --> {t.email}</h5>
          <h6>{t.ocupation} - {t.bio}</h6>  {" "}
          <input
            type="radio"
            className="btn btn-danger form control"
            onChange={() => props.handlerDelete(index)}
          />
        </div>
      ))}
    </animated.div>
  );
}

export default Mostrar;
