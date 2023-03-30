import { Link, useNavigate, useLocation, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Message from '../components/Message'
import axios from 'axios'

// Basic login form
function Login () {
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
            const userLogin = { email, password }
            const response = await axios.post("/api/users/login", userLogin)
            //console.log(JSON.stringify(response?.data))
            if (response.data) {
                const { name, email, token } = response.data
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
        <div className="center-content">
            <div className="form-container">
                {isFailure === true &&
                    <Message messagee={errMsg} />
                }
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
        </div>

    )
}

export default Login;