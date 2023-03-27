import { useState, useContext } from "react"
import AuthContext from './context/AuthProvider'
import Dashboard from './views/Dashboard'
import Layout from './components/Layout'
import Default from './components/Default'
import Login from './views/Login'
import Signup from './views/Signup'
import Test from './components/Test'
import Navbar from './components/Navbar'
import ProtectRoute from './components/ProtectRoute'
import { Routes, Route } from 'react-router-dom'



function App() {
  const { auth } = useContext(AuthContext)
  // isLoggedIn state is used to conditionally display different home screen depending on if the user is logged in or not. Shows user dashboard if logged in, standard landing page otherwise

  return(
    <>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/" element={<Default />}/>

        {/* Private Routes */}
        <Route element={<ProtectRoute />} >
          <Route path="/test" element={<Test />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
    </>
  )
}
  {/*
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  
  if (isLoggedIn == false){
    return(
      
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
*/}

export default App