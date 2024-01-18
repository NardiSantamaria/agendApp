import React from "react";
import "../styles/notesPage.scss";
import imagination from '../images/imagination.png';

class Board extends React.Component{
    render(){
        return <div className="boardDiv">
            <div className="row">
                <div className="columnheader" id="boardColumn" style={{width:'100%', justifyContent:"center", display:"flex"}}>
                    <div className="">
                        <h1 className="tittle-board">
                            Board
                            <img src={imagination} className="app-logo imgBoard"  />
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    }

}export default Board;