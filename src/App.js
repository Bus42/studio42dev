import React, {useEffect} from "react";
import M from 'materialize-css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.scss";
import "materialize-css/dist/css/materialize.min.css"
import Home from "./components/home/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/navbar/Navbar";

function App() {
  useEffect(() => {
    M.AutoInit()
  })
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
          <Switch>
            <Route path="/" exact><Home/></Route>
            <Route path="/Projects"><Projects/></Route>
            <Route path="/About"><About/></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
