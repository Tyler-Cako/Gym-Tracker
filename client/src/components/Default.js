import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const Default = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/dashboard')
    }
  })

    return (
    <>
        <div className="container">
          <h2>Landing Page</h2>
        </div>
    </>
    )
}

export default Default