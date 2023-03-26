import { useState, useContext } from "react"
import AuthContext from './context/AuthProvider'
import Dashboard from './views/Dashboard'
import Layout from './components/Layout'
import Default from './components/Default'
import Login from './views/Login'
import Signup from './views/Signup'
import RequireAuth from './components/RequireAuth'
import Test from './components/Test'
import { Routes, Route } from 'react-router-dom'



function App() {
  const { setAuth} = useContext(AuthContext)
  // isLoggedIn state is used to conditionally display different home screen depending on if the user is logged in or not. Shows user dashboard if logged in, standard landing page otherwise

  return(
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<Signup />}/>
        <Route path="/" element={<Default />}/>

        {/* Private Routes */}
        <Route element={<RequireAuth/>}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

      </Route>
    </Routes>
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