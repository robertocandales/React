import React from "react";
import '../Styles/navbar.css'



function Header() {
  return (
    <header>
        

        
        <nav>
            <ul>
            <li><a href="./components/About">about</a> </li>
            <li><a href="skills">skills</a></li>
            <li><a href="work">my work</a></li>
            <li className="web"><a href="web">Web Design</a></li>
            </ul>
        </nav>


    </header>
  );
}

export default Header;
