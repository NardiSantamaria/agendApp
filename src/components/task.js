import React from "react";

class Task extends React.Component{
   render(){
    const{tittle=''}=this.props;
    const{time=''}=this.props;
    return<td className="">
            <text>
                {this.props.time} - {this.props.tittle}
            </text>
        </td>
   }

}export default Task;