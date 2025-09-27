import React from "react";
import "../styles/scheduledTaskStyles.scss";
import Task from "../components/Task";

class ScheduledTask extends React.Component{
    constructor(props){
        super(props);
        this.state={
                error: null,
                isLoaded: false,
                tasks:[]
            };
    }
    
    render(){
        const {list}=this.props;
        return <div className="container-home home-task">
            <div className="row">
                <h2 className="tittleTaskSection">Tareas de hoy</h2>
            </div>
            <ul>
                {list.map(task=> {
                    return  <Task key={task.id_task} text={task.taskTittle} description={task.taskDescription} status={task.idStatus} taskScheduledDateTime={task.taskScheduledDateTime} ></Task> 
                
                })}
            </ul>
            
        </div>
       
    }
}export default ScheduledTask;

