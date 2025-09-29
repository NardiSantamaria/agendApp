import React from "react";
import taskImage from '../images/task.png';
import fincancesImage from '../images/images (1).png';
import trashImage from '../images/images.png';
import { Link, NavLink } from "react-router-dom";
class actions extends React.Component{
    render(){
        return <div className="row" id="actionsRow">
            <Link className="actionButton" to="/finanzas">
                <div className=" ">
                    <img src={fincancesImage} className="" alt="logo" /> 
                </div>
            </Link>
            <Link className="actionButton" to="/tareas">
                <div className=" ">
                    <img id="taskcheck" src={taskImage} className="" alt="logo" /> 
                </div>
            </Link>
            <Link className="actionButton" to="/eliminar/1">
                <div className=" ">
                    <img id="trash" src={trashImage} className="" alt="logo" /> 
                </div>
            </Link>
        </div>
    }
}
export default actions;