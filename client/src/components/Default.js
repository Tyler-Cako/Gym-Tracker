import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

// Show default screen if user is logged in, otherwise, redirect the user to their dashboard
const Default = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/dashboard')
    }
  })

    return (
      <div id="default-background" >
        <div className="container">
          <div className="info-container">
            <h1>Beautiful Gym Tracking</h1>
            <h6>Simple tracking and analytics at your fingertips</h6>
            <a className="button button-primary" onClick={() => navigate('/signup', { replace: true })}>Try Now</a>
          </div>
        </div>
      </div>
    )
}

export default Default