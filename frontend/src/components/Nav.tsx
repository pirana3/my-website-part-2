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
            <Link to='/' className=''> Home</Link>
            <Link to='/about' className=''> About</Link>
          </div>

          
        </nav>
      </div>





    </header>
  )
}

export default Nav