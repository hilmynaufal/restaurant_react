import React, { useState } from 'react'

import '../App.css';

import Login from './Login';
import Register from './Register';

const Form = ({setLoginState}) => {
    const [currentFrom, setCurrentFrom] = useState("login");

  const toggleFrom = (formName) => {
    setCurrentFrom(formName);
  }


  return (
    <div className='bg-black'>
      { currentFrom === "login" ? <Login onFormSwitch = {toggleFrom} setLoginState={setLoginState} /> : <Register onFormSwitch = {toggleFrom} setLoginState={setLoginState} />}
    </div>
  )
}

export default Form