import React, { ComponentProps, FC, useState } from "react";
import "./Navbar.css";
import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownLink,
  MDBBtn,
} from "mdb-react-ui-kit";
import avatar from "../Assets/babe-avatar.jpg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid ms-4">
        <a className="navbar-brand" href="#">
          StartupHive
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="#">
              About
            </a>
            <a className="nav-link" href="#">
              Resources
            </a>
          </div>
          <div className="d-flex ms-auto">
            <MDBBtn outline className="me-5">
              Sign Up
            </MDBBtn>
            <MDBDropdown className="">
              <MDBDropdownToggle
                tag="a"
                className="nav-link d-flex align-items-center"
                href="#"
              >
                <img
                  src={avatar}
                  className="rounded-circle"
                  height="22"
                  width="22"
                  alt="Avatar"
                  loading="lazy"
                />
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem>
                  <MDBDropdownLink href="/profile">My Profile</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink href="#">Settings</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink href="#">Logout</MDBDropdownLink>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
