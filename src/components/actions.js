import React from "react";
import taskImage from '../images/task.png';
import fincancesImage from '../images/images (1).png';
import trashImage from '../images/images.png';
import { Link, NavLink } from "react-router-dom";
class actions extends React.Component{
    render(){
        return <div class="NavBar row w-20">
            <Link className="links" to="/finanzas">
            <div className="CircleLink row">
                <img src={fincancesImage} className="App-logo imgLink" alt="logo" /> 
            </div>
            </Link>
            <Link className="links" to="/tareas">
                <div className="CircleLink row">
                    <img src={taskImage} className="App-logo imgLink" alt="logo" /> 
                </div>
            </Link>
            <Link className="links" to="/eliminar/1">
                <div className="CircleLink row">
                    <img src={trashImage} className="App-logo imgLink" alt="logo" /> 
                </div>
            </Link>
        </div>
    }

}
export default actions;