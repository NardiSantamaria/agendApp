import React from "react";

class Task extends React.Component{
    render(){
        // const{tittle=''}=this.props;
        const {text=''}=this.props;
        const{time=''}=this.props;
        // if(this.props.use==false){
            return(
                <li>
                    {time}  {text} 
                </li>
            )
        // }
    
        
    }
}export default Task;