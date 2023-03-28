import { useState, useEffect } from 'react'
import axios from 'axios'

const Workouts = () => {
    const [ exercises, setExercises ] = useState()

    const test = () => {
        console.log("test")
    }

    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem('user'))

        try {
            axios.get('/api/exercises')
        } catch (error) {
            console.log(error)
        }
    }, [])
    
    return (
        <>
            <div>Workouts</div>
            

            {exercises
                ? (
                    <ul>
                        {/*exercises.map((exercise) => <li>{exercise?.name}</li>)*/}
                    </ul>
                    )
                : <p>No exercises available</p>
            }
        </>
    )
}

export default Workouts