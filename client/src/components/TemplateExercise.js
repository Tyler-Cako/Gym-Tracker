const TemplateExercise = ({ name, reps, sets }) => {
    return (
        <div className="row u-full-width">
            <div className="eight columns">
                <label for="name">Exercise name</label>
                <input type="text" name="name" className="u-full-width" value={name}/>
            </div>
            <div className="two columns">
                <label for="reps">Reps</label>
                <input type="number" name="reps" className="u-full-width" value={name}/>
            </div>
            <div className="two columns">
                <label for="sets">Sets</label>
                <input type="number" name="sets" className="u-full-width" value={name}/>
            </div>
        </div>
    )
}

export default TemplateExercise