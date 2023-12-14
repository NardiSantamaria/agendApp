import React from "react";

class Task extends React.Component{
   render(){
    const{tittle=''}=this.props;
    const{time=''}=this.props;
    return<li>
            {this.props.time}  {this.props.tittle}
        </li>
   }

}export default Task;