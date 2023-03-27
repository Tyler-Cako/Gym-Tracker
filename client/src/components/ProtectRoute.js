import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'
import useAuth from '../hooks/useAuth'

const ProtectRoute = () => {
    const { auth } = useAuth();
    const location = useLocation()
    console.log(auth.name)

    return (
        auth?.name
            ? <Outlet />
            : <Navigate to="/" state={{ from: location }} replace />    
    )
}

export default ProtectRoute