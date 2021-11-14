import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Camera from "./camera";
import DistanceSensor from "./DistanceSensor";
import Navbar from "./Navbar";
// import "./App.css";
import SQLdb from "./SQLdb";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/distance">
            <DistanceSensor />
          </Route>
          <Route exact path="/camera">
            <Camera />
          </Route>
          <Route exact path="/car-records">
            <SQLdb />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
