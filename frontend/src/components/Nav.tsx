import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
      <div>
        <nav>
          <div>
          
          </div>

          <div>
            <Link to='/' className=''> Home change this </Link>
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