import React from "react";

import { Link } from "react-router-dom";

import LOGO from "../assets/logo.png";

const Navbar = () => {

  return (
    <nav className="sticky-top navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={LOGO}
            alt="Chankya Coaching Classes"
            style={{ width: "200px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas w-75 offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header mb-4">
            <small className="offcanvas-title fs-6" id="offcanvasNavbarLabel">
              <i className="bi bi-list mx-2 text-secondary">MENU</i>
            </small>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body mx-4">
            <ul className="navbar-nav justify-content-end  flex-grow-1 pe-4">
              <li className="nav-item" data-bs-dismiss="offcanvas"
              aria-label="Close">
                <Link className="nav-link" aria-current="page" data-bs-dismiss="offcanvas"
              aria-label="Close" to="/">
                  <i className="bi bi-house"></i> HOME
                </Link>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas"
              aria-label="Close">
                <Link className="nav-link" to="courses">
                  <i className="bi bi-collection"></i> COURSES
                </Link>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas"
              aria-label="Close">
                <Link className="nav-link" to="gallery">
                  <i className="bi bi-image"></i> GALLERY
                </Link>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas"
              aria-label="Close">
                <Link className="nav-link" to="contact">
                  <i className="bi bi-telephone"></i> CONTACT
                </Link>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas"
              aria-label="Close">
                <Link className="nav-link" to="dashboard">
                <i className="bi bi-columns-gap"></i> DASHBOARD
                </Link>
              </li>
{/* 
              <li className="nav-item nav-link" style={{ cursor: "pointer" }}>
                <i className="bi bi-moon-stars"></i> DARK MODE
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
