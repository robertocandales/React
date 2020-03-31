import React from "react";
//import UserForm from "./components/UserForm";
import Header from "./components/Header";
import { useSpring, animated } from "react-spring";
import Title from "./components/Title";
import "../src/Styles/body.css"
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";



function App() {
  const animation1 = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    <animated.div style={animation1}>
      <div >
        <header>
          <Header />  
        </header>
        <Title />

        {/* <div style={main} className="container-fluid">
          <UserForm />
        </div> */}
        <About/>
        <Skill/>
        <Work/>
      </div>
    </animated.div>
  );
}

export default App;
