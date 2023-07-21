import React from "react";

import { Link } from "react-router-dom";

import LOGO from "../assets/logo.png";

const Navbar = () => {
    // const initialThemeState = 'moon-star'
    // const [themeState, setThemeState] = useState(initialThemeState);

    // const handleThemeChange = () => {
    //     if (themeState === 'moon-stars">') {
    //         setThemeState('sun-fill">')
    //     } else {
    //         setThemeState('moon-stars">')
    //     }
    // }

  return (
    <nav className="sticky-top navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container">
        <Link className="navbar-brand" href="/">
          <img
            src={LOGO}
            alt="Chankya Coaching Classes"
            style={{ width: "200px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">
                <i className="bi bi-house"></i> HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                <i className="bi bi-collection"></i> COURSES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                <i className="bi bi-image"></i> GALLERY
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                <i className="bi bi-person-circle"></i> DASHBOARD
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                <i className="bi bi-telephone"></i> CONTACT
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle px-1"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 <i className='bi bi-sun-fill'></i>
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" href="#">
                      <i className="bi bi-moon-stars"></i> DARK MODE
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <i className="bi bi-sun-fill"></i> LIGHT MODE
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
