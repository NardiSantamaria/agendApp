import React from "react";
import "../styles/board.scss";
import imagination from '../images/imagination.png';

class Board extends React.Component{
    render(){
        return <div className="boardDiv">
            <div className="row">
                <div className="columnheader" id="boardColumn" style={{width:'100%', justifyContent:"center", display:"flex"}}>
                    <div className="">
                        <h2 className="tittle_board">
                            Board
                            <img src={imagination} className="imgBoard"  />
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    }

}export default Board;