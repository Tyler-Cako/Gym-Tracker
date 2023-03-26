import { useState } from 'react'
//import Workouts from '../components/Workouts'
import NewWorkout from '../components/NewWorkout'
import Templates from '../components/Templates'
import NewTemplate from '../components/NewTemplate'

function Dashboard(props) {
    // Get user from localstorage
    //JSON.parse(localStorage.getItem("user"))

    /*
    //display state, used to identify  which dashboard module to display depending on button/default value
    const [displayType, setDisplayType] = useState("workouts")
    //const [message, setMessage] = useState("")
    
    // Event handler for pressing one of the navigation buttons of the dashboard, changes displayType state accordingly
    const buttonController = (e, type) => {
        e.preventDefault()
        setDisplayType(type)
    }   
    */

    return(
        <div>
            <div>Test</div>
            {/*
                <div className="container">
                        <h1>Welcome to Your Dashboard {props.name}</h1>
                        <div id="display">
                            <ul className="selections">
                                <li className="selection"><a onClick={(e) => buttonController(e, "workouts")} href="#">Your Workouts</a></li>
                                <li className="selection"><a onClick={(e) => buttonController(e, "newWorkout")} href="#">New Workout</a></li>
                                <li className="selection"><a onClick={(e) => buttonController(e, "templates")} href="#">Your Templates</a></li>
                                <li className="selection"><a onClick={(e) => buttonController(e, "newTemplate")} href="#">New Template</a></li>
                            </ul>
                        </div>

                        {/* Conditionals that display a dashboard module depending ont the value of displayType state }
                        {/*displayType == "workouts" &&
                            <Workouts />
                }
                {displayType == "newWorkout" &&
                <NewWorkout />
            }
            {displayType == "templates" &&
                <Templates />
            }
            {displayType == "newTemplate" &&
                <NewTemplate />
            }
            </div>
        */}
        </div>
    )
}

export default Dashboard;