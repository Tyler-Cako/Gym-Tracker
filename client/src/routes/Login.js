import { Link } from 'react-router-dom'
import "./Login.css"

// Basic login form
function Login () {
    return (
        <div className="form-container">
            <Link to="/" className="button home">Close</Link>
            <div className="u-cf"/>
            <div className="login-form">
                <form className="container">
                    <h1>Login</h1> 
                    <div>
                        <label for="username" className="u-full-width">Username</label>
                        <input type="email" id="username" className="u-full-width"></input>
                        <label for="password" className="u-full-width">Password</label>
                        <input type="password" id="password" className="u-full-width"></input>
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