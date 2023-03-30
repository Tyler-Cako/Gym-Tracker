import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

// Basic signup form, uses Link component from react-router to send user to login if they already own an account.
function Signup () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const params = new URLSearchParams()
            params.append('name', name)
            params.append('email', email)
            params.append('password', password)
            const response = await axios.post('/api/users', params)
            if (response) {
                localStorage.setItem('user', JSON.stringify(response.data))
                navigate('/dashboard', { replace: true })
            }
        } catch(error) {
            throw new Error('Registration failed')
        }
    }
    return (
        <div className="form-container">
            <div className="u-cf"/>
            <div className="login-form">
                <form className="container" onSubmit={handleSubmit}>
                    <h1>Signup</h1> 
                    <div>
                    <label for="name" className="u-full-width">Name</label>
                    <input
                        type="text" 
                        id="name" 
                        className="u-full-width" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    <h6>Already have an account? <Link to="/Login">Login Here.</Link></h6>
                    </div>
                    <br />
                    <button type="submit" className="button-primary">Signup</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;