import TemplateExercise from './TemplateExercise'

function NewTemplate() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <>
            <div className="u-cf"></div>
            <form className="workout-form">   
                <TemplateExercise />
                <button>Add Exercise</button>
            </form>
        </>
    )
}

export default NewTemplate;