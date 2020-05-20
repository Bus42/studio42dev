import React, { useEffect } from "react";
import M from "materialize-css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import "materialize-css/dist/css/materialize.min.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/Projects";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import NotFound from "./NotFound";

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="*" >
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
