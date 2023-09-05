import React from "react";
import "../styles/HomeTaskStyles.scss";

class HomeTask extends React.Component{
    render(){
        return <div className="w-70">
            <div className="container-home">
                <table>
                    <ul>
                        <li>
                            task 1
                        </li>
                        <li>
                            task 2
                        </li>
                        <li>
                            task 3
                        </li>
                    </ul>
                </table>
            </div>
        </div>
    }
}export default HomeTask;