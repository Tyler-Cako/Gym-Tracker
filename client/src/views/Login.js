import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState, } from 'react'
import { useContext } from 'react'
import useAuth from "../hooks/useAuth"
import AuthContext from "../context/AuthProvider"
import Message from '../components/Message'
import axios from 'axios'
import "./Login.css"

// Basic login form
function Login () {
    const { setAuth } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/dashboard"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isFailure, setIsFailure] = useState(false)
    const [errMsg, setErrMsg] = useState("Test")

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const params = new URLSearchParams()
            params.append('email', email)
            params.append('password', password)
            const response = await axios.post("/api/users/login", params)
            console.log(JSON.stringify(response?.data))
            const name = response?.data?.name
            const token = response?.data?.token
            setAuth({ name, token })
            setEmail("")
            setPassword("")
            navigate(from, { replace: true })

        } catch(error) {
            setIsFailure(true)
            setErrMsg(error.message)
            console.log(error.message)
            //throw new Error(error)
        }
    }

    return (
        <div className="form-container">
            {isFailure === true &&
                <Message messagee={errMsg} />
            }
            <Link to="/" className="button home">Close</Link>
            <div className="u-cf"/>
            <div className="login-form">
                <form className="container" onSubmit={handleSubmit}>
                    <h1>Login</h1> 
                    <div>
                        <label for="email" className="u-full-width">Email</label>
                        <input
                            type="email" 
                            id="email" 
                            className="u-full-width" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label for="password" className="u-full-width">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="u-full-width"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <h6>Don't have an account? <Link to="/Signup">Register Here.</Link></h6>
                    </div>
                    <br />
                    <button type="submit" className="button-primary">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;