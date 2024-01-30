import "./styles/general.scss";
import HeaderPage from './components/header';
import Board from "./Sections/Board";
import HomeTask from "./Sections/HomeTask";
import FreeTime from "./Sections/FreeTime";
function App() {
  return (
    <div className="App">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <HeaderPage></HeaderPage>
      <div className="body row">
        <Board></Board>
        <div className="columntask">
          <HomeTask></HomeTask>
          <FreeTime></FreeTime>
        </div>
      </div>
    </div>
  );
}

export default App;
