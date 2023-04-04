import { useState } from 'react'
import Workouts from '../components/Exercises'
import NewWorkout from '../components/NewExercise'
import Analyze from '../components/Analyze'
import Templates from "../components/Templates"
import NewTemplate from "../components/NewTemplate"

function Dashboard() {
    // Get user from localstorage
    //JSON.parse(localStorage.getItem("user"))

    //display state, used to identify  which dashboard module to display depending on button/default value
    const [displayType, setDisplayType] = useState("workouts")
    //const [message, setMessage] = useState("")
    const userName = JSON.parse(localStorage.getItem('user')).name
    
    // Event handler for pressing one of the navigation buttons of the dashboard, changes displayType state accordingly
    const buttonController = (e, type) => {
        e.preventDefault()
        setDisplayType(type)
    }   
    

    return(
        <div>
            <div className="container">
                    <h1>Welcome to Your Dashboard {userName}</h1>
                    <div id="display">
                            <button className={displayType=="workouts"
                            ?"button-primary"
                            :"button"
                            }
                            onClick={(e) => buttonController(e, "workouts")} 
                            href="#">Exercise History
                            </button>

                            <button className={displayType=="newWorkout"
                            ?"button-primary"
                            :"button"
                            } onClick={(e) => buttonController(e, "newWorkout")} 
                            href="#">New Exercise
                            </button>

                            <button className={displayType=="analyze"
                            ?"button-primary"
                            :"button" 
                            }
                            onClick={(e) => buttonController(e, "analyze")} href="#">Analyze Data</button>
                            {/*
                            <li className="selection"><a onClick={(e) => buttonController(e, "templates")} href="#">Your Templates</a></li>
                            <li className="selection"><a onClick={(e) => buttonController(e, "newTemplate")} href="#">New Template</a></li>
                            */}

                            <button className={displayType=="templates"
                            ?"button-primary"
                            :"button" 
                            }
                            onClick={(e) => buttonController(e, "templates")} href="#">Templates</button>
                            {/*
                            <li className="selection"><a onClick={(e) => buttonController(e, "templates")} href="#">Your Templates</a></li>
                            <li className="selection"><a onClick={(e) => buttonController(e, "newTemplate")} href="#">New Template</a></li>
                            */}

                            <button className={displayType=="newTemplate"
                            ?"button-primary"
                            :"button" 
                            }
                            onClick={(e) => buttonController(e, "newTemplate")} href="#">New Template</button>
                            {/*
                            <li className="selection"><a onClick={(e) => buttonController(e, "templates")} href="#">Your Templates</a></li>
                            <li className="selection"><a onClick={(e) => buttonController(e, "newTemplate")} href="#">New Template</a></li>
                            */}
                <div className="u-cf"></div>

                        {/* Conditionals that display a dashboard module depending ont the value of displayType state */}
                {displayType == "workouts" &&
                    <Workouts/>
                }
                {displayType == "newWorkout" &&
                    <NewWorkout displayType={displayType} changeView={() => setDisplayType("workouts")}/>
                }
                {displayType == "analyze" &&
                    <Analyze />
                }
                {displayType == "templates" &&
                    <Templates />
                }
                {displayType == "newTemplate" &&
                    <NewTemplate changeView={() => setDisplayType("templates")}/>
                }
            </div>
            {/* TODO

            */}
            </div>
        </div>
    )
}

export default Dashboard;