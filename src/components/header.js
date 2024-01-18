import React from "react";
import Actions from './actions';
import calendar from '../images/2446395.png';

class HeaderPage extends React.Component{
    render(){
        return <div>
            <header className="app-header">
                <div className="row">
                    <div className="columnheader">
                        <div>
                            <h1 className="tittle-link" style={{marginLeft:"20px"}}>
                                Lunes 
                                <img src={calendar} className="app-logo imgLogo"  /> 
                            </h1>
                        </div>
                    </div>
                    <div className="columnheader" id="actionsColumn">
                        <Actions></Actions>
                    </div>
                </div>
            </header>
        </div>
    }
} export default HeaderPage;