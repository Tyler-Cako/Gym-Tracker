import { useState, useEffect } from 'react'
import axios from 'axios'

// Lists all of the available workouts
const Workouts = ({ displayType }) => {
    const [ exercises, setExercises ] = useState([])

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('user')).token

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
        // Make axios Post request with token and stuff
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
            <table className="u-full-width">
                <tr>
                    <th>Exercise</th>
                    <th>Weight</th>
                    <th>Date</th>
                </tr>

                {exercises //If exercises available, display those exercises. Otherwise, show that none are available
                ?   (
                    <tbody>
                        {Object.values(exercises).map(exercise =>
                        <tr>
                            <td>{exercise.exerciseType}</td>
                            <td>{exercise.weight}x{exercise.reps}</td>
                            <td>{exercise.createdAt.slice(0, 10)}</td>
                        </tr>
                        )} 
                    </tbody>
                    )
                : <p>No exercises available</p>
                }
            </table>
            
        </>
    )
}

export default Workouts