import axios from 'axios'
import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'

function NewWorkouts(props) {
    const [type, setType] = useState("")
    const [weight, setWeight] = useState()
    const [reps, setReps] = useState()

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = JSON.parse(localStorage.getItem('user'))
        const token = user.token

        const params = new URLSearchParams()
        params.append('exerciseType', type)
        params.append('weight', weight)
        params.append('reps', reps)
        params.append('primary', 'true')

        const auth = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const response = await axios.post("/api/exercises", params, auth)

            if (response) {
                props.changeView()
            }
        } catch(error) {
            console.log(error)
        }

        
    }

    /*
        exerciseType: req.body.exerciseType,
        user: req.user.id,
        weight: req.body.weight,
        reps: req.body.reps,
        primary: req.body.primary
    */

    return(
        <form onSubmit={handleSubmit}>
            <label for="type">Exercise</label>
            <input 
            name="type" 
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            />
            <label for="weight">Weight</label>
            <input 
            name="weight" 
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            />
            <label for="reps">Reps</label>
            <input 
            name="reps" 
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            />
            <br></br>
            <button type="submit" className="button-primary">Submit</button>
        </form>
    )
}

export default NewWorkouts;