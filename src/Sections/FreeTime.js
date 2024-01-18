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
        fetch("https://cat-fact.herokuapp.com/facts").then(res => res.json())
        .then((jsonTasks)=>{
            console.log(jsonTasks);
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
                    <Task key="0"></Task>
                    {tasks.map(fact=> (
                        <Task key={fact._id} text={fact.text} use={fact.used}></Task>
                    ))}
                </ul>
        </div>
    }
}export default FreeTime;