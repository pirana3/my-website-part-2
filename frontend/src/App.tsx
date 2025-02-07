import { useState } from 'react'
import Nav from './components/Nav.tsx'
import Footer from './components/Footer.tsx'
import {Routes, Route, Router} from 'react-router-dom'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Skills from './pages/Skills.tsx'
import Works from './pages/Works.tsx'

const App = () => {

  return (
    
    <main className='relative justify-between'>

      <Nav/>
      <section> 
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element= {<Contact/>} />
          <Route path='/Skills' element= {<Skills/>} />
          <Route path='/Works' element= {<Works/>} /> 

        </Routes>

      </section>

      <Footer/>

    </main>
    
  )
}

export default App
