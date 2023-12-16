import React from "react";
import Actions from './actions';
import calendar from '../images/2446395.png';
import imagination from '../images/imagination.png';
class HeaderPage extends React.Component{
    render(){
        return <div>
            <header className="app-header">
                <div className="row">
                    <div className="columnheader">
                        <div className="">
                            <h1 className="tittle-board">
                                Board
                            </h1>
                        </div>
                        <img src={imagination} className="app-logo imgBoard"  />
                    </div>
                    <div className="columnheader">
                        <div className="">
                            <h1 className="tittle-link">
                                Lunes
                            </h1>
                        </div>
                        <img src={calendar} className="app-logo imgLogo"  /> 
                    </div>
                    <div className="columnheader">
                        <Actions></Actions>
                    </div>
                </div>
            </header>
        </div>
    }
} export default HeaderPage;