import React from "react";

class Task extends React.Component{
    render(){
        const {text=''}=this.props;
        // const{tittle=''}=this.props;
        const{time=''}=this.props;
        const{use=''}=this.props;
        if(this.props.use==false){
            return(
                <li>
                    {this.props.time} - {this.props.text} 
                </li>
            )
        }
    
        return(
            <li>
                {this.props.text} 
            </li>
        )
        
    }
}export default Task;