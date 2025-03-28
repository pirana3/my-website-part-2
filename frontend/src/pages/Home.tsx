import React from 'react'
import { useState, useEffect, useCallback } from 'react'

const Home = () => {

  const welcome = [
    'Welcome', 'Bienvenido', 'Bonjour', 'Willkommen', 'Benvenuto', 'Välkommen', 'ようこそ', '欢迎'
  ]

  function myComponent(){
    const [newName, setnewName] = useState("");

    const shuffle = useCallback(() => {
      const index = Math.floor(Math.random() * welcome.length);
      setnewName(welcome[index]);
    }, []);

    useEffect(()  => {
      const intervalID = setInterval(shuffle, 5000);
      return () => clearInterval(intervalID);
    }, [shuffle])

    return(
      <text>{newName}</text>
    )

  }



  return (
    <div className='bg-bb'>
      <h1 className='text-blue-500 font-bold'> 
        {myComponent()}
         </h1>
         <h2> To my website shit </h2>
         <p></p>
    </div>
  )
}

export default Home