import React from "react";
import '../Styles/navbar.css'



function Header() {
  return (
    <header>
        

        
        <nav>
            <ul>
            <li><a href="https://www.linkedin.com/in/robertocandales/" rel="noopener noreferrer" target ="_blank">LinkedIn</a> </li>
            <li><a href="#skills">skills</a></li>
            <li><a href="https://github.com/robertocandales" rel="noopener noreferrer" target ="_blank">github</a></li>
            <li className="web"><a href="web">Web Design</a></li>
            </ul>
        </nav>


    </header>
  );
}

export default Header;
