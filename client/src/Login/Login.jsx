/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const Login = (props) => {
  const [ email, setEmail] = useState('');
  const [ password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <label form="email">email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} 
        type='email' placeholder='youremail@gmail.com' id='email' name='email'/>
        
        <label form="password">password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)}  type='password' placeholder='*********' id='password' name='password'/>
        <button type='submit'>Login</button>
      </form>
      <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Already have an Account? Register her.</button>
    </ div>
  )
}

export default Login