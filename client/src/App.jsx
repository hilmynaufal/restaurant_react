import { BrowserRouter } from "react-router-dom"

import { Navbar, Hero, Contact, About } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
        <Navbar />
        <Hero />
        </div>
        <About />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App