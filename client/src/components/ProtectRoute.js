import { useLocation, Navigate, Outlet } from "react-router-dom"

// Protects routes by checking local storage for a user, otherwise show default.js screen.
const ProtectRoute = () => {
    const location = useLocation()

   return (
        localStorage.getItem('user')
        ? <Outlet />
        : <Navigate to="/" state={{ from: location }} replace />    
   )
}

export default ProtectRoute