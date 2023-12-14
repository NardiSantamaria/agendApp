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
        return <div className="home-task">
            <div className="container-home">
                <table>
                    <thead> 
                        <div className="row">
                            <h2>Tareas de Hoy</h2>
                            <a>
                                <img src={agregarTaskimg} alt="logo" /> 
                            </a>
                        </div>
                    </thead>
                    <ul>
                        <Task></Task>
                        {tasks.map((task, index)=> 
                            <Task time={task.time} tittle={task.tittle}></Task>
                        )}
                    </ul>
                </table>
            </div>
        </div>
    }
}export default HomeTask;