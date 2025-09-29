import React from "react";

class Task extends React.Component{
    render(){
        const {text=''}=this.props;
        const{time=''}=this.props;
        const{description=''}=this.props;
        const{status=''}=this.props;
        const{taskScheduledDateTime=''}=this.props;
        return(
            <li>
                {time} {text} {description} {status} {taskScheduledDateTime}
            </li>
        )
    }
}export default Task;