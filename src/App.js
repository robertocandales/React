import React from 'react';
// import UserForm from "./components/UserForm";
import { useSpring, animated } from 'react-spring';
import * as THREE from 'three';
import Header from './components/Header';
import Title from './components/Title';
import './Styles/body.css';
import About from './components/About';
import Skill from './components/Skill';
import Work from './components/Work';
import CssBaseline from '@material-ui/core/CssBaseline';
import Portfolio from './components/Portfolio/Portfolio';
import JobDescription from './components/JobDescription/JobDescription';
import Name1 from './components/Name1/Name1';
import Blops from './components/Blops/Blops';
import Animation from './components/Animation/Animation';

const scene = new THREE.Scene();
function App() {
  const animation1 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  const background = {
    background: 'black',
  };

  return (
    <animated.div style={animation1}>
      {/*<Blops></Blops>*/}
      <Blops />
      <CssBaseline />
      <div style={background}>
        <header>
          <Header />
        </header>
        {/*<Animation />*/}
        <Title />

        {/* <div style={main} className="container-fluid">
          <UserForm />
        </div> */}

        <JobDescription />
        <Blops />
        {/* <About /> */}
        <Skill />
        <Work />
        <Blops />
        <Portfolio />
      </div>
    </animated.div>
  );
}

export default App;
