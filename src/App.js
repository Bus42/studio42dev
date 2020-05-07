import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App(props) {
  return (
    <div className="App">
      <header>
        <p>Studio42 Web Development</p>
      </header>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
