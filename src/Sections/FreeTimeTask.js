import React from "react";
import "../styles/freeTimePage.scss";
import Task from "../components/Task";
class FreeTimeTask extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoaded:false,
            tasks:[]
        }
    } 
    render(){
        const {list}=this.props;
        return <div className="freeTime container-home">
            <div className="row">
                    <h2 className="tittleTaskSection" >Tiempo libre</h2>
            </div>
            <ul>
                {list.map(task=> {
                        return <Task key={task.id_task} text={task.taskTittle} description={task.taskDescription} status={task.idStatus} ></Task>  
                })}
            </ul>
        </div>
    }
}export default FreeTimeTask;