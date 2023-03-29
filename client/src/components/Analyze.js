import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar }  from 'recharts'
import { useState } from 'react'
import axios from 'axios'
import "../custom.css"

const Analyze = () => {
    const [ exercise, setExercise ] = useState("")
    const [ searched, setSearched ] = useState(false)
    let data = {}

    const findExercise = async (e) => {
        e.preventDefault();

        const token = JSON.parse(localStorage.getItem('user')).token

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
        try {
            setSearched(true)
            const response = await axios.get(`/api/exercises/${exercise}`, config)
            data = response.data
            console.log(data)
            setExercise("")
        } catch (error) {
            console.log(error)
        }
    }

    const resetSearch = (e) => {
        e.preventDefault()

        setSearched(false)
    }

    return (
        <>
            {searched==false
            ?<form onSubmit={(findExercise)} className="exercise-form">
                <div className="row">
                    <label for="exercise">Exercise Name</label>
                    <input type="text" name="exercise" className="u-full-width" value={exercise} onChange={(e) => setExercise(e.target.value)}/>
                </div>
                <button type="submit" className="button-primary">Search</button>
                {/*<button>View All</button>*/}
            </form>

            :
            <div>
                <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
                <button onClick={resetSearch} className="button-primary">New Search</button>
            </div>

            }
        </>
    )
}

export default Analyze;