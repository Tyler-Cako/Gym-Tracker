import { Link, useNavigate, useLocation, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useAuth from "../hooks/useAuth"
import CloseBtn from '../components/CloseBtn'
import Message from '../components/Message'
import axios from 'axios'
import "./Login.css"

// Basic login form
function Login () {
    const { setAuth } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/dashboard"

    // Get State
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isFailure, setIsFailure] = useState(false)
    const [errMsg, setErrMsg] = useState("Test")

    useEffect(() => {
        if (localStorage.getItem('user')) {
            navigate('/dashboard', { replace: true })
        }
    })

    // On submit, check login info with the database
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const params = new URLSearchParams()
            params.append('email', email)
            params.append('password', password)
            const response = await axios.post("/api/users/login", params)
            console.log(JSON.stringify(response?.data))
            if (response.data) {
                const { name, email, token } = response.data
                setAuth({ name, email, token })
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            
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
            <CloseBtn />
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