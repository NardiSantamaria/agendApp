import React from "react";
import "../styles/HomeTaskStyles.scss";
import { useState } from "react";
import Task from "../components/task";
import agregarTaskimg from "../images/agregar.png"
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
        fetch("https://cat-fact.herokuapp.com/facts")
        .then( 
            res=> res.json() 
        )
        .then(
            (resultJson)=>{
                // let fact=resultJson[0]
                // console.log(JSON.stringify(fact._id));
                this.setState({
                    isLoaded:true,
                    tasks:resultJson
                });
                
            }
            // (error)=>{
            //     this.setState({
            //         isLoaded: true,
            //         error
            //     });
            // }
        );
    }
    render(){
        const {error, isLoaded, tasks}=this.state;
        
        return <div className="home-task">
        <div className="container-home">
                <div className="row">
                    <h2>Tareas de hoy</h2>
                    <a>
                        <img src={agregarTaskimg} alt="logo" /> 
                    </a>
                </div>
                <ul>
                    <Task key="0"></Task>
                    {tasks.map(fact=> (
                        <Task key={fact._id} text={fact.text} time={fact.createdAt} use={fact.used}></Task>
                    ))}
                </ul>
            </div>
        </div>
    }
}export default HomeTask;

