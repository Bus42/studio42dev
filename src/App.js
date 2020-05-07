import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Header from "./components/header/Header";

function App(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="App">
      <Router>
        <div>
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
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
