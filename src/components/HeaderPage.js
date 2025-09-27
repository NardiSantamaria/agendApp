import React from "react";
import Actions from './Actions';
import gatito from '../images/gatitoGigip2.JPG';
import imageDaytittle from '../images/bordetitulo.JPG'
import FormAddTask from "./modals/FormAddTask";

class HeaderPage extends React.Component{

    constructor(props){
        super(props);
    }
    
    render(){
        const {updateListTaskNS, updateListTaskSQ}=this.props;
        return <div>
            <header className="app-header">
                <div className="row">
                    <div className="columnheader">
                        <h1 className="tittle-link" >
                            <img src={gatito} className="app-logo imgLogo" /> 
                        </h1>
                    </div>
                    <div className="columnheader dayTittle">
                        <img className="imgTittle" src={imageDaytittle}/> 
                        <p className="dayName">Lunes</p> 
                    </div>
                    <FormAddTask updateListSQ={updateListTaskSQ} updateListNS={updateListTaskNS}></FormAddTask>
                    <div className="columnheader" id="actionsColumn">
                        <Actions></Actions>
                    </div>
                </div>
            </header>
        </div>
    }
} export default HeaderPage;