/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { login } from '../services/api';

const Login = ({setLoginState, onFormSwitch}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log("test")

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

  const notifyLoginSuccess = (msg) => toast.success(msg, {
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
    // console.log(email);    
    // setEmail(e.email)
    // setPassword(e.password)
    
    const result = await login(email, password)

    if (result.status === '200') {
      notifyLoginSuccess(result.msg)
      // console.log('terloginlogin')
      setLoginState(true)
      return
    } else {
      console.log(result.status)
      notifyError(result.msg)
    }
  }

  

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-purple-600 lg:max-w-xl">
        
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="email"
              className="block text-sm font-semibold text-gray-800">
              email</label>
            <input value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password"
              className="block text-sm font-semibold text-gray-800">
              password
            </label>
            <input value={password}
              type='Password'
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <button type='submit'
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Login
            </button>
          </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a
            onClick={() => onFormSwitch('register')}
            // onClick={notifyError}
            className="font-medium text-purple-600 hover:underline cursor-pointer"
          >
            Sign up
          </a>
        </p>

      </ div>
    </div>
  )
}

export default Login