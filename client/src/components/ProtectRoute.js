import { useLocation, Navigate, Outlet } from "react-router-dom"

const ProtectRoute = () => {
    const location = useLocation()

   return (
        localStorage.getItem('user')
        ? <Outlet />
        : <Navigate to="/" state={{ from: location }} replace />    
   )
}

export default ProtectRoute