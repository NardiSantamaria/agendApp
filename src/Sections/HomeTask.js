import React from "react";
import "../styles/HomeTaskStyles.scss";
import Task from "../components/task";
import FormAddTask from "../components/modals/FormAddTask";
class HomeTask extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error: null,
            isLoaded: false,
            tasks:[]
        };
    }
    componentDidMount(){
        fetch("http://localhost:8080/task/tasks")
        .then( 
            res=> res.json() 
        )
        .then(
            (resultJson)=>{
                this.setState({
                    isLoaded:true,
                    tasks:resultJson
                });
            }
        ).catch(
            error=>{
                console.log(error);
            }
        )
    }
    render(){
        const {error, isLoaded, tasks}=this.state;
        return <div className="home-task">
            <div className="container-home">
                <FormAddTask></FormAddTask>
                <ul>
                    {tasks.map(task=> {
                        if(task.scheduledDatetime!=null && task.scheduledDatetime!=""){
                            <Task key={task.idTask} text={task.tittle} time={task.scheduledDatetime} description={task.description} status={task.idStatus} ></Task>
                        }
                        return null;
                    })}
                </ul>
            </div>
        </div>
    }
}export default HomeTask;

