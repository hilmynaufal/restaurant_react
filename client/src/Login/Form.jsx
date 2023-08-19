import React, { useState } from 'react'

import '../App.css';

import Login from './Login';
import Register from './Register';

const Form = ({setLoginState, setUsername}) => {
    const [currentFrom, setCurrentFrom] = useState("login");

  const toggleFrom = (formName) => {
    setCurrentFrom(formName);
  }


  return (
    <div className='bg-[url(https://e0.pxfuel.com/wallpapers/61/374/desktop-wallpaper-big-burger-burger-fries-fast-food.jpg)]'>
      <div className='w-full h-full backdrop-blur-sm bg-black/40'>
      { currentFrom === "login" ? <Login setUsername={setUsername} onFormSwitch = {toggleFrom} setLoginState={setLoginState} /> : <Register onFormSwitch = {toggleFrom} setLoginState={setLoginState} />}
      </div>
    </div>
  )
}

export default Form