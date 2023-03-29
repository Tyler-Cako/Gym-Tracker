import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import "../custom.css"

function Navbar () { 
    const { setAuth, auth } = useAuth();

    const signout = () => {
        setAuth({})
        localStorage.removeItem('user')
    }
    if (localStorage.getItem('user')) {
        return (
            <nav className="container">
                <a className="title u-pull-left" href="#"><h5><strong>Gym Tracker</strong></h5></a>
                <button onClick={signout} className="button-primary u-pull-right">Logout</button>
                <div className="u-cf"></div>
            </nav>
        )
    } else {
        return(
            <>
                <nav className="container">
                    <Link to="/signup" className="u-pull-right button button-primary">Signup</Link>
                    <Link to="/login" className="button u-pull-right">Login</Link>
                    <div className="u-cf"></div>
                </nav>
    
            </>
        )
    }
}
//}

export default Navbar;