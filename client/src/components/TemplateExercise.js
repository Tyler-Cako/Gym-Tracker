import { useState } from 'react'

const TemplateExercise = (props) => {
    const [ name, setName ] = useState(props.name)
    const [ reps, setReps ] = useState(props.reps)
    const [ sets, setSets ] = useState(props.sets)

    return (
        <div className="row u-full-width">
            <div className="eight columns">
                <label for="name">Exercise name</label>
                <input type="text" name="name" className="u-full-width" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="two columns">
                <label for="reps">Reps</label>
                <input type="number" name="reps" className="u-full-width" value={reps} onChange={(e) => setReps(e.target.value)}/>
            </div>
            <div className="two columns">
                <label for="sets">Sets</label>
                <input type="number" name="sets" className="u-full-width" value={sets} onChange={(e) => setSets(e.target.value)}/>
            </div>
        </div>
    )
}

export default TemplateExercise