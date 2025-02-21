import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import {useWindowScroll} from "react-use";
import {useEffect, useRef, useState } from "react";

const navItems = ["Home ", "About", "Skills", "Works", "Contact"];

const navBar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const audioElementRef = useRef(null);
  const vaContainerRef = useRef(null);
   const { y: currentScrollY} = useWindowScroll();


}


const Nav = () => {
  return (
    <header>
      <div>
        <nav>
          <div>
          
          </div>

          <div>
            <Link to='/' className=''> Home change this you cna call me miku</Link>
            <Link to='/about' className=''> About</Link>
            <Link to='/skills' className=''> Skills</Link>
            <Link to='/Works' className=''> Works</Link>
            <Link to= '/contact' className=''> Contact</Link>
          </div>

          
        </nav>
      </div>





    </header>
  )
}

export default Nav