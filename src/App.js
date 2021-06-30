import React from "react";
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
import PRIVACY_POLICY from "./components/PRIVACY_POLICY";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/privacy_policy">
              <PRIVACY_POLICY />
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
