import React from "react";

class Task extends React.Component{
    render(){
        const {text=''}=this.props;
        const{time=''}=this.props;
        const{description=''}=this.props;
        const{status=''}=this.props;
        // if(this.props.use==false){
            return(
                <li>
                    {time} {text} {description} {status}
                </li>
            )
        // }
    
        
    }
}export default Task;