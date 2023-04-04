import { useState } from 'react'
import axios from 'axios'

function NewTemplate(props) {
    const [ exercises, setExercises ] = useState([{name: "", reps: 0, sets: 0}])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = JSON.parse(localStorage.getItem('user'))
        const token = user.token

        // Use URLSearchParams() for URLENCODED request, otherwise it just posts JSON and doesnt work
        const params = new URLSearchParams()
        /*
        params.append('exerciseType', type)
        params.append('weight', weight)
        params.append('reps', reps)
        params.append('primary', 'true')
        */

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

    const addExercise = (e) => {
        e.preventDefault()

        let state = [...exercises]
        state.push({name: "", reps: 0, sets: 0})
        setExercises(state)
    }

    const handleFormInput = (index, e) => {
        let state = [...exercises]
        state[index][e.target.name] = e.target.value
        setExercises(state)
    }

    const inputs = (
        exercises.map((exercise, index) => {
            return (
            <div className="row u-full-width" key={index}>
                <div className="eight columns">
                    <label for="name">Exercise name</label>
                    <input type="text" name="name" className="u-full-width" value={exercise.name} onChange={(e) => handleFormInput(index, e)}/>
                </div>
                <div className="two columns">
                    <label for="reps">Reps</label>
                    <input type="number" name="reps" className="u-full-width" value={exercise.reps} onChange={(e) => handleFormInput(index, e)}/>
                </div>
                <div className="two columns">
                    <label for="sets">Sets</label>
                    <input type="number" name="sets" className="u-full-width" value={exercise.sets} onChange={(e) => handleFormInput(index, e)}/>
                </div>
            </div>
            )
                
        })
    )

    return(
        <>
            <div className="u-cf"></div>
            <form className="workout-form">   
                <tbody>
                    {inputs}
                    <button onClick={addExercise}>Add Exercise</button>
                </tbody>
            </form>
        </>
    )
}

export default NewTemplate;