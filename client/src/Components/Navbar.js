import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg mb-5">
        <div className="container-fluid">
          <a className="navbar-brand ms-4" href="#">
            <span className="startup">STARTUP</span>Hive
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto navbar-nav-scroll mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Resources
                </a>
              </li>
            </ul>
            <span className="navbar-text me-5">
              <button type="button" class="btn">
                Sign Up
              </button>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
