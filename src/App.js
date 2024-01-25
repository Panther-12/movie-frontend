import Home from "./pages/Home";
import Notification from "./utils/Notification";

function App() {
  return (
    <div className="App">
      <Home/>
      <Notification text={window.localStorage.getItem("text")}/>
    </div>
  );
}

export default App;
