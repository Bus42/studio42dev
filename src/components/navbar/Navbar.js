import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

const Navbar = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
    const abortcontroller = new AbortController();
    return function cleanup() {
      abortcontroller.abort();
    };
  });
  return (
    <div id="navbar">
      <nav className="grey darken-3">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Studio42Dev
          </Link>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="#"
            data-target="nav-mobile"
            className="sidenav-trigger right"
          >
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul
        className="sidenav no-autoinit sidenav-close grey darken-3"
        id="nav-mobile"
      >
        <li>
          <Link to="/" className="white-text text-darken-2">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Projects" className="white-text text-darken-2">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/About" className="white-text text-darken-2">
            About
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="white-text text-darken-2">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
