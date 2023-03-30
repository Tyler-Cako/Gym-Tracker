import { Link, useNavigate } from 'react-router-dom'
import "../custom.css"

function Navbar () { 
    const navigate = useNavigate()

    const signout = () => {
        navigate("/")
        localStorage.removeItem('user')
    }

    // For clicking logo on leftside of navbar
    const goHome = () => {
        navigate('/', { replace: true })
    }

    // If user is logged in, show signout and navigation, otherwise, show login menu
    if (localStorage.getItem('user')) {
        return (
            <nav className="container">
                <a className="title u-pull-left" href="#" onClick={goHome}><h5><strong>Gym Tracker</strong></h5></a>
                <button onClick={signout} className="button-primary u-pull-right">Logout</button>
                <div className="u-cf"></div>
            </nav>
        )
    } else {
        return(
            <>
                <nav className="container">
                    <a className="title u-pull-left" href="#" onClick={goHome}><h5><strong>Gym Tracker</strong></h5></a>
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