import React from "react";
import "../styles/freeTimePage.scss";
import Task from "../components/task";
class FreeTime extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isLoaded:false,
            tasks:[]
        }
    }
    componentDidMount(){
        fetch("http://localhost:8080/task/tasks").then(res => res.json())
        .then((jsonTasks)=>{
            this.setState({
                isLoaded:true,
                tasks:jsonTasks
            });
        });
    }
    render(){
        const {isLoaded, tasks}=this.state;

        return <div className="freeTime container-home">
            <div className="row">
                    <h2>Tiempo libre *</h2>
                    <a>
                        {/* <img src="" alt="logo" />  */}
                    </a>
                </div>
                <ul>
                    {tasks.map(task=> {
                        if(task.scheduledDatetime==null){
                            return <Task key={task.id_task} text={task.tittle} description={task.description} status={task.status} ></Task>
                        }
                        return null;
                    })}
                </ul>
        </div>
    }
}export default FreeTime;