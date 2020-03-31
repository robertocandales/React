import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import "./Style.css";
import Mostrar from "./Mostrar";
import NextForm from "./NextForm";
import { useSpring, animated } from "react-spring";


//import { Formik } from "formik";

const style = {
  fontSize: "15px",
  textAlign: "center",
  padding: "20px",
  background: "black"
  //border: "1px solid skyblue"
};

function UserForm() {
  const { register, errors, handleSubmit } = useForm();

  const [input, setinput] = useState([
    {
      firstname: "Wolfgang",
      lastname: "Mozart",
      email: "WolfgangAmadeusMozart@Chrysostomus.com",
      ocupation: "Compositor, director de orquesta",
      city: "Sacro Imperio Romano Germánico",
      bio:
        "Maestro del Clasicismo, considerado como uno de los músicos más influyentes y destacados de la historia."
    }
  ]);

  // animation Enviar Button
  const [enviarButton, setenviarButton] = useState(false);
  const fade = useSpring({
    opacity: enviarButton ? 1 : 0.5
  });

  const [next, setnext] = useState(false);

  const handlerDelete = id => {
    setinput(input.filter((user, index) => index !== id));
    //props.setinput(x)
    console.log(id);
    console.log(input);

    //console.log(e.value )
  };

  const onSubmit = (data, e) => {
    e.preventDefault();
    setinput([...input, data]);
    //console.log(data);
    //console.log(input);
    e.target.reset();
  };

  //Next Step
  const fade1 = useSpring({
    opacity: next ? 1 : 0,
    color: next? 'red' : 'blue'
  });
  const handleNext = () => {
    setnext(!next);
    console.log(next);
  };

  return (
    <Fragment>
      <h1 className="text-center my-5 ">Formulario</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container text-center"
        style={style}
      >
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="firstname"
              ref={register({
                required: { value: true, message: "Campo Obligatorio" }
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors?.firstname?.message}
            </span>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="lastname"
              ref={register({
                required: { value: true, message: "Campo Obligatorio" }
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors?.lastname?.message}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="email"
              name="email"
              ref={register({
                required: { value: true, message: "Campo Obligatorio" }
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors?.email?.message}
            </span>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Ocupation"
              name="ocupation"
              ref={register({
                required: { value: true, message: "Campo Obligatorio" }
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors?.ocupation?.message}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              ref={register({
                required: { value: true, message: "Campo Obligatorio" }
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors?.city?.message}
            </span>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Bio"
              name="bio"
              ref={register({
                required: { value: true, message: "Campo Obligatorio" }
              })}
            />
            <span className="text-danger text-small d-block mb-2">
              {errors?.bio?.message}
            </span>
          </div>
        </div>
        <div>
          <button
            className="btn btn-outline-success mt-3 form control"
            onClick={() => setenviarButton(!enviarButton)}
          >
            Enviar
          </button>
        </div>
      </form>
      <animated.div style={fade}>
        <Mostrar handlerDelete={handlerDelete} input={input} />
      </animated.div>

      <div style={next1}>
        <button className="btn btn-outline-success mt-3" onClick={handleNext}>
          Next
        </button>
      </div>

      <animated.div style={fade1}>{next ? <NextForm /> : null}</animated.div>
    </Fragment>
  );
}

const next1 = {
  textAlign: "center"
};

export default UserForm;
