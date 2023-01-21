import { Link } from 'react-router-dom'

function Navbar () { 
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

export default Navbar;