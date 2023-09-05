import React from "react";
import Actions from './actions';
import calendar from '../images/2446395.png';
import imagination from '../images/imagination.png';
class HeaderPage extends React.Component{
    render(){
        return <div>
            <header className="App-header">
                <div className="row">
                    <div className="w-30 row">
                        <h1 className="tittle-board">
                            Board
                        </h1><img src={imagination} className="App-logo imgBoard"  /> 
                    </div>
                    <a className="tittle-link w-50"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer">
                        Lunes 
                        <img src={calendar} className="App-logo imgLogo"  /> 
                    </a>
                    <Actions></Actions>
                </div>
            </header>
        </div>
    }
} export default HeaderPage;