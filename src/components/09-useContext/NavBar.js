import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <Link className="navbar-brand" to="/">
          UseContext
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink
              activeclassname="active"
              className="nav-item nav-link"
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              activeclassname="active"
              className=" nav-item nav-link"
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              activeclassname="active"
              className=" nav-item nav-link"
              to="/login"
            >
              Login
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>

    // <nav>
    //   <ul>
    //     <li>
    //       {" "}
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       {" "}
    //       <Link to="/about">About</Link>
    //     </li>
    //     <li>
    //       {" "}
    //       <Link to="/login">Login</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
};
