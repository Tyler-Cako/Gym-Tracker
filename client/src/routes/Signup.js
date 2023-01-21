import { Link } from 'react-router-dom'
import "./Login.css"

// Basic signup form, uses Link component from react-router to send user to login if they already own an account.
function Signup () {
    return (
        <div className="form-container">
            <Link to="/" className="button home">Close</Link>
            <div className="u-cf"/>
            <div className="login-form">
                <form className="container">
                    <h1>Signup</h1> 
                    <div>
                        <label for="username" className="u-full-width">Username</label>
                        <input type="email" id="username" className="u-full-width"></input>
                        <label for="password" className="u-full-width">Password</label>
                        <input type="password" id="password" className="u-full-width"></input>
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