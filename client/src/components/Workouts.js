import { useState, useEffect } from 'react'
import axios from 'axios'

const Workouts = () => {
    const [ exercises, setExercises ] = useState([])

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('user')).token

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
        const getExercises = async () => {
            try {
                const response = await axios.get('/api/exercises', config)
                setExercises(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        getExercises()
    }, [])

    return (
        <>
            <div>Workouts</div>
            

            {exercises
                ? (
                    <ul>
                        {Object.values(exercises).map(exercise => <li>{exercise.exerciseType} {exercise.weight}x{exercise.reps}               {exercise.createdAt}</li>)}
                    </ul>
                    )
                : <p>No exercises available</p>
            }
        </>
    )
}

export default Workouts