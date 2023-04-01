import axios from 'axios'
import { useState } from 'react'

// Makes an API Post call to make a new exercise for the user
function NewWorkouts(props) {
    const [type, setType] = useState("")
    const [weight, setWeight] = useState()
    const [reps, setReps] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = JSON.parse(localStorage.getItem('user'))
        const token = user.token

        // Use URLSearchParams() for URLENCODED request, otherwise it just posts JSON and doesnt work
        const params = new URLSearchParams()
        params.append('exerciseType', type)
        params.append('weight', weight)
        params.append('reps', reps)
        params.append('primary', 'true')

        const auth = {
            headers: {
                // Need Bearer token for token
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const response = await axios.post("/api/exercises", params, auth)

            if (response) {
                // Changes state to "workouts" on dashboard. Essentially redirects user to their list of exercises if the request was valid.
                props.changeView()
            }
        } catch(error) {
            console.log(error)
        }

        
    }

    return(
        <>
            <div className="u-cf"></div>
            <form onSubmit={handleSubmit} className="workout-form">
                <label for="type">Exercise</label>
                <input 
                name="type" 
                type="text"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="u-full-width"
                />
                <div className="row">
                    <div className="six columns">
                        <label for="weight">Weight</label>
                        <input 
                        name="weight" 
                        type="number"
                        value={weight}
                        className="u-full-width"
                        onChange={(e) => setWeight(e.target.value)}
                        />
                    </div>
                    <div className="six columns">
                        <label for="reps">Reps</label>
                        <input 
                        name="reps" 
                        type="number"
                        value={reps}
                        className="u-full-width"
                        onChange={(e) => setReps(e.target.value)}
                        />
                    </div>

                </div>
                
                <br></br>
                <button type="submit" className="button-primary">Submit</button>
            </form>
        </>
    )
}

export default NewWorkouts;