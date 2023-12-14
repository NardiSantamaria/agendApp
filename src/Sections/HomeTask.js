import React from "react";
import "../styles/HomeTaskStyles.scss";
import { useState } from "react";
import tasks from "../resources/taskData";
import Task from "../components/task";
import agregarTaskimg from "../images/agregar.png"
console.log(tasks);
class HomeTask extends React.Component{
    constructor(props){
        super(props);
        this.state={tasks: Array };
    }
    render(){
        return <div className="w-70">
            <div className="container-home">
                <table>
                    <thead> 
                        <div className="row">
                            <h1>Tareas de Hoy</h1>
                            <a>
                                <img src={agregarTaskimg} alt="logo" /> 
                            </a>
                        </div>
                    </thead>
                    {tasks.map((task, index)=> 
                        <tr>
                            <Task time={task.time} tittle={task.tittle}></Task>
                        </tr>
                    )}
                   
                    
                </table>
            </div>
        </div>
    }
}export default HomeTask;