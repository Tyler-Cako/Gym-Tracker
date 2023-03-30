import { Outlet } from "react-router-dom"
import Navbar from './Navbar'
import "../custom.css"

const Layout = () => {
    return (
        <main className="App">
            <Navbar />
            <Outlet />
        </main>
    )
}

export default Layout