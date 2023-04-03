import { useState } from 'react'
import TemplateExercise from './TemplateExercise'

function NewTemplate() {
    const [ exercises, setExercises ] = useState([{name: "", reps: 0, sets: 0}])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const addExercise = (e) => {
        e.preventDefault()

        let state = exercises
        state.push({name: "", reps: 0, sets: 0})
        setExercises(state)
        console.log(exercises)
    }

    return(
        <>
            <div className="u-cf"></div>
            <form className="workout-form">   
                <tbody>
                    {exercises.map(({name, reps, sets}) => {
                        return (
                            <TemplateExercise name={name} reps={reps} sets={sets}/>
                        )
                    })}
                    <button onClick={addExercise}>Add Exercise</button>
                </tbody>
            </form>
        </>
    )
}

export default NewTemplate;