import "./styles/general.scss";
import Footer from './components/footer';
import HeaderPage from './components/header';
import Board from "./Sections/Board";
import HomeTask from "./Sections/HomeTask";
import FreeTime from "./Sections/FreeTime";
function App() {
  return (
    <div className="App">
      <HeaderPage></HeaderPage>
      <div className="body row">
        <Board></Board>
        <div className="columntask">
          <HomeTask></HomeTask>
          <FreeTime></FreeTime>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
