import { useState, useContext } from "react"
import AuthContext from './context/AuthProvider'
import Navbar from "./components/Navbar.js"
import Dashboard from './views/Dashboard'

function App() {
  const { setAuth } = useContext(AuthContext)
  // isLoggedIn state is used to conditionally display different home screen depending on if the user is logged in or not. Shows user dashboard if logged in, standard landing page otherwise
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (isLoggedIn == false){
    return(
      <>
        <a className="button" onClick={(e) => setIsLoggedIn(true)}>Toggle Login</a>
        <div className="container">
          <Navbar />
          <h2>Landing Page</h2>
        </div>
      </>
    )
  }
  else {
    return(
      <>
        <a className="button" onClick={(e) => setIsLoggedIn(false)}>Toggle Login</a>
        <Dashboard name="Tyler"/>
      </>
    )
  }
}

export default App;
