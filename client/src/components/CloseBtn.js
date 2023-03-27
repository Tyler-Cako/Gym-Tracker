import { useNavigate, useLocation } from 'react-router-dom'

const CloseBtn = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const closeHelper = () => {
        navigate(from, { replace: true })
    }

    return (
        <a to="/" className="button home" onClick={closeHelper}>Close</a>
    )
}

export default CloseBtn