import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function Navbar () { 
    const { setAuth, auth } = useAuth();

    /*
    const signout = () => {
        setAuth({})
    }*/

/*
    if (auth.name) {
        return (
            <div>
                <a onClick={signout} className="u-pull-right button-primary">Logout</a>
            </div>
        )
    } else {
        */
        return(
            <>
                <nav>
                    <Link to="/signup" className="u-pull-right button button-primary">Signup</Link>
                    <Link to="/login" className="button u-pull-right">Login</Link>
                    <div className="u-cf"></div>
                </nav>
    
            </>
        )
    }

//}

export default Navbar;