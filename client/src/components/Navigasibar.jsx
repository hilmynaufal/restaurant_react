/* eslint-disable react/no-unknown-property */

import {
  Navbar,
  Typography,
  Card,
} from "@material-tailwind/react";

import { userImg } from '../assets';



export default function Navigasibar() {
 
  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full 
      rounded-none py-2 px-4 lg:px-8 lg:py-4 backdrop-blur-lg 
      backdrop-filter bg-opacity-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center 
        justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" 
            className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold 
            whitespace-nowrap dark:text-white">Restaurant</span>
        </a>
        <div className="flex items-center md:order-2">
            <button type="button" className="flex mr-3 text-sm 
            bg-gray-800 rounded-full md:mr-0 focus:ring-4 
            focus:ring-gray-300 dark:focus:ring-gray-600" 
            id="user-menu-button" aria-expanded="false" 
            data-dropdown-toggle="user-dropdown" 
            data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" 
              src={ userImg } alt="user photo" />
            </button>
            {/* Dropdown menu */}
            <div className="z-50 hidden my-4 text-base list-none 
            bg-white divide-y divide-gray-100 rounded-lg shadow 
            dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 
                dark:text-white">Bonnie Green</span>
                <span className="block text-sm  text-gray-500 truncate 
                dark:text-gray-400">name@flowbite.com</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 
                  hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200
                   dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700
                   hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700
                   hover:bg-gray-100 dark:hover:bg-gray-600
                    dark:text-gray-200 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700
                   hover:bg-gray-100 dark:hover:bg-gray-600 
                   dark:text-gray-200 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
            </div>
            <button data-collapse-toggle="navbar-user" type="button" 
            className="inline-flex items-center p-2 w-10 h-10 justify-center 
            text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 
            focus:outline-none focus:ring-2 focus:ring-gray-200 
            dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded 
              hover:bg-gray-100 md:hover:bg-transparent 
              md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 
              dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 
              md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white 
              md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
              md:dark:hover:bg-transparent dark:border-gray-700">About</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 
              md:hover:bg-transparent md:hover:text-blue-700 md:p-0 
              dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 
              dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 
              md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white 
              md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
              md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
            </li>
            <li>
              <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 
              md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white 
              md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white 
              md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
        </div>
      </Navbar>
      <div className="mx-auto max-w-screen-md py-12">
        <Card className="mb-12 overflow-hidden">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
          />
        </Card>
        <Typography variant="h2" color="blue-gray" className="mb-2">
          What is Material Tailwind
        </Typography>
        <Typography color="gray" className="font-normal">
          Can you help me out? you will get a lot of free exposure doing this
          can my website be in english?. There is too much white space do less
          with more, so that will be a conversation piece can you rework to make
          the pizza look more delicious other agencies charge much lesser can
          you make the blue bluer?. I think we need to start from scratch can my
          website be in english?, yet make it sexy i&apos;ll pay you in a week
          we don&apos;t need to pay upfront i hope you understand can you make
          it stand out more?. Make the font bigger can you help me out? you will
          get a lot of free exposure doing this that&apos;s going to be a chunk
          of change other agencies charge much lesser. Are you busy this
          weekend? I have a new project with a tight deadline that&apos;s going
          to be a chunk of change. There are more projects lined up charge extra
          the next time.
          dsadasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          sdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          dsaaa
          dsadasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          dsaaaa
          dsaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          dsadasdasdasdasssssssssssssssssssssssssssss
          dsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          dsaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </Typography>
      </div>
    </>
  );
}