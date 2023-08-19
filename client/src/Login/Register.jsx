/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { register } from '../services/api';

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Register = ({setLoginState, onFormSwitch, setUsername}) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ name, setName ] = useState(''); 

  const notifyError = (msg) => toast.error(msg, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const notifyLoginSuccess = (s) => toast.success(s, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const result = await register(name, email, password)

    // console.log(result)
    if (result.status === '200') {
      notifyLoginSuccess(`Hello, ${result.msg}`)
      // console.log('terloginlogin')
      setUsername(result.msg)
      setLoginState(true)
      return
    } else {
      notifyError(msg)
    }
  }


  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      
      <div className="w-full p-6 m-auto bg-black/50 shadow-xl lg:max-w-xl text-white">
        <h1 className="text-3xl font-semibold text-center">
          REGISTER
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
        <div className="mb-2 ">
            <label htmlFor="username"
              className="block text-sm font-semibold ">
              Username</label>
            <input value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2 ">
            <label htmlFor="email"
              className="block text-sm font-semibold ">
              Email</label>
            <input value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password"
              className="block text-sm font-semibold">
              Password
            </label>
            <input value={password}
              type='Password'
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-amber-400 focus:ring-amber-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <button type='submit'
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-amber-500 rounded-md hover:bg-amber-600 focus:outline-none focus:bg-amber-600">
              Register
            </button>
          </div>
        </form>
        
        <p className="mt-8 text-xs font-light text-center ">
          {" "}
          Already have an account?{" "}
          <a
            onClick={() => onFormSwitch('login')}
            // onClick={notifyError}
            className="font-medium text-amber-400 hover:underline cursor-pointer"
          >
            Sign in
          </a>
        </p>
      </ div>
    </div>
  )
}

export default Register