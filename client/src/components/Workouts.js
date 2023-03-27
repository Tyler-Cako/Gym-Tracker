import { useState, useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import axios from 'axios'
import useRefreshToken from '../hooks/useRefreshToken'

const Workouts = () => {
    const [ exercises, setExercises ] = useState()
    const { auth } = useAuth()
    const refresh = useRefreshToken()

    
    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()

        const getExercises = async () => {
            try {
                const response = axios.get('/api/exercises/', {
                    signal: controller.signal
                })
                isMounted && setExercises(response?.data)
                //console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        
        getExercises()

        return () => {
            isMounted = false
            controller.abort()
        }
    
    }, [])

    const test = () => {
        console.log("test")
    }
    
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
            <button onClick={() => refresh()}>Refresh</button>
        </>
    )
}

export default Workouts