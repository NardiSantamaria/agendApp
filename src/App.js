import "./styles/general.scss";
import HeaderPage from './components/HeaderPage';
import Board from "./Sections/Board";
import FreeTimeTask from "./Sections/FreeTimeTask";
import ScheduledTask from "./Sections/ScheduledTask";
import {useEffect, useState} from "react";

function App() {
  const [taskNS, setTaskNS]=useState([]);
  const [taskSQ, setTaskSQ]=useState([]);

  const noScheduledList=()=>{
    fetch("http://localhost:8080/task/taskNoScheduled").then(res => res.json())
    .then((jsonTaskNS)=>{
       setTaskNS(jsonTaskNS);
    });
  }

  const scheduledList=()=>{
    fetch("http://localhost:8080/task/tasks").then(res => res.json())
    .then((jsonTasks)=>{
        setTaskSQ(jsonTasks);
    });
  }

  useEffect(()=>{
    noScheduledList();
    scheduledList();
  },[]);

  const updateListTaskNS=(task)=>{
    setTaskNS([...taskNS, task]);
  }
  
  const updateListTaskSQ=(task)=>{
    setTaskSQ([...taskSQ, task]);
  }
  return (
    <div className="App">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <HeaderPage updateListTaskNS={updateListTaskNS} updateListTaskSQ={updateListTaskSQ}></HeaderPage>
      <div className="body row">
        <Board></Board>
        <div className="columntask">
          <ScheduledTask list={taskSQ}></ScheduledTask>
          <FreeTimeTask list={taskNS}></FreeTimeTask>
        </div>
      </div>
    </div>
  );
}

export default App;
