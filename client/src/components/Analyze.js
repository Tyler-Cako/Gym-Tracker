import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Label, LabelList, LabelListProps, ResponsiveContainer }  from 'recharts'
import { useState } from 'react'
import axios from 'axios'
import "../custom.css"

const Analyze = () => {
    const [ exercise, setExercise ] = useState("")
    const [ searched, setSearched ] = useState(false)
    const [ data, setData ] = useState([])

    const parseData = (response) => {
        return response.map((exercise, dataKey) => {
            return {
                'weight':exercise.weight,
                'reps':exercise.reps,
                'max':(exercise.weight*exercise.reps*.0333+exercise.weight),
                'date':exercise.createdAt.slice(0, 10)
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
            setData(parseData(response.data))
            setExercise("")
        } catch (error) {
            console.log(error)
        }
    }

    const customTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            console.log(payload)
            return(
                <div id="label-tooltip">
                    <ul>
                        <li className="label">{`Date: ${label}`}</li>
                        <li className="label">{`Weight: ${payload[0].payload.weight}`}</li>
                        <li className="label">{`Reps: ${payload[0].payload.reps}`}</li>
                        <li className="label">{`Estimated Max: ${payload[0].payload.max}`}</li>
                    </ul>
                </div>
            )
        }
    }

    const renderBarChart = (
    <ResponsiveContainer width="80%" height={480}>
        <BarChart data={data} margin={{ top:25 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" label={{value: "Date", position: 'bottom'}}>
                </XAxis>
                <YAxis label={{value: "Estimated 1 Rep Max", angle: -90, position: 'insideLeft'}} padding={{ top: 20}}/>
                <Tooltip content={customTooltip}/>
                <Legend align="left" />
                <Bar dataKey="max" fill="#8884d8">
                    <LabelList dataKey="max" position="top" allowDecimals="false">
                    </LabelList>
                </Bar>
            </BarChart>
    </ResponsiveContainer>
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
                {renderBarChart}
                <button onClick={resetSearch} className="button-primary">New Search</button>
            </div>

            }
        </>
    )
}

export default Analyze;