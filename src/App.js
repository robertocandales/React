import React from 'react';
// import UserForm from "./components/UserForm";
import { useSpring, animated } from 'react-spring';
import Header from './components/Header';
import Title from './components/Title';
import './Styles/body.css';
import About from './components/About';
import Skill from './components/Skill';
import Work from './components/Work';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const animation1 = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  const background = {
    background: 'black',
  };

  return (
    <animated.div style={animation1}>
      <CssBaseline />
      <div style={background}>
        <header>
          <Header />
        </header>
        <Title />

        {/* <div style={main} className="container-fluid">
          <UserForm />
        </div> */}
        <About />
        <Skill />
        <Work />
      </div>
    </animated.div>
  );
}

export default App;
