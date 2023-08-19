
import { createContext, useState } from "react";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Form, } from "./Login";
import { Dashboard } from "./components/Dashboard";

const App = () => {

  const [loginState, setLoginState] = useState()
  const [username, setUsername] = useState('')
  
  return (
    <UserContext.Provider value={{username, setUsername, setLoginState}}>
      <div className="bg-white">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          theme="light"
        />
        {loginState ? <Dashboard /> : <Form setUsername={setUsername} setLoginState={setLoginState} />}
      </div>
    </UserContext.Provider>
    // <div className="bg-gray-200 h-screen">
    //   <Reservasi/>
    // </div>
    // <BrowserRouter>
    //   <div>
    // <div>
    // <Navigasibar />
    // <Hero />
    // </div>
    //     <About />
    //     <Contact />
    //   </div>
    // </BrowserRouter>
  )
}

export default App
export const UserContext = createContext();