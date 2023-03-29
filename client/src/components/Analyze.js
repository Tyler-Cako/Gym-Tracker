import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, LineChart, Line }  from 'recharts'
import { useState } from 'react'
import axios from 'axios'
import "../custom.css"

const Analyze = () => {
    const [ exercise, setExercise ] = useState("")
    const [ searched, setSearched ] = useState(false)
    let data = []

    const testData = [
        {
          name: 'Page A',
          weight: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          weight: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          weight: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          weight: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          weight: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          weight: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          weight: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    const parseData = (response) => {
        return response.map((exercise) => {
            return {
                'weight':exercise.weight,
                'reps':exercise.reps,
                'date':exercise.createdAt
            }
        })
    }

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
            data = parseData(response.data)
            console.log(data)
            console.log(testData)
            setExercise("")
        } catch (error) {
            console.log(error)
        }
    }

    const renderBarChart = (
    <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="weight" fill="#8884d8" />
    </BarChart>
    );

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
            :<div>
                    <BarChart width={500} height={300} data={testData}>
                    <Bar dataKey="weight" fill="#8884d8" />
                    </BarChart>
                <button onClick={resetSearch} className="button-primary">New Search</button>
            </div>

            }
        </>
    )
}

export default Analyze;