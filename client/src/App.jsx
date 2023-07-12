import { BrowserRouter } from "react-router-dom"

import { useState } from "react";

import { Navbar, Hero, Contact, About } from './components'
import { Form } from "./Login";

const App = () => {


  return (
    <div>
      <Form />
    </div>
    
    // <BrowserRouter>
    //   <div>
    //     <div>
    //     <Navbar />
    //     <Hero />
    //     </div>
    //     <About />
    //     <Contact />
    //   </div>
    // </BrowserRouter>
  )
}

export default App