import { BrowserRouter } from "react-router-dom"

import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Navigasibar, Hero, Contact, About } from './components'
import { Form,} from "./Login";
import { Dashboard } from "./components/Dashboard";

const App = () => {

  const [loginState, setLoginState] = useState();

  return (
    // <div>
    //   <ToastContainer
    //       position="top-center"
    //       autoClose={2000}
    //       hideProgressBar={false}
    //       newestOnTop={false}
    //       closeOnClick
    //       rtl={false}
    //       pauseOnFocusLoss={false}
    //       draggable={false}
    //       pauseOnHover
    //       theme="light"
    //     />
    //   {loginState ? <Dashboard/> : <Form setLoginState={setLoginState} />}
    // </div>
    
    // <BrowserRouter>
    //   <div>
        <div>
        <Navigasibar />
        <Hero />
        </div>
    //     <About />
    //     <Contact />
    //   </div>
    // </BrowserRouter>
  )
}

export default App