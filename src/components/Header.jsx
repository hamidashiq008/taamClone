import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logoImg from "../assets/images/logo1.svg";
import {
  SimpleButton,
  SimpleLink,
  GradientButton,
  GradientLink,
} from "../Partials/CustomButton";

const Header = () => {
  const location = useLocation(); // 👈 Get current route path

  return (
    <header>
      <div className="header-container">
        <nav className="navbar navbar-expand-md p-0">
          <div className="container-fluid" style={{ maxWidth: 840 }}>
            <div className="img-wrapper d-flex">
              <div className="me-2">
                <img src={logoImg} alt="Logo" width={30} height={30} />
              </div>
              <div><h5>TAAM AI</h5></div>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse header-navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li
                  className={`nav-item ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  <NavLink className="nav-link" to="/">
                    AI Gateway
                  </NavLink>
                </li>
                <li
                  className={`nav-item ${
                    location.pathname === "/Features" ? "active" : ""
                  }`}
                >
                  <NavLink className="nav-link" to="/Features">
                    Features
                  </NavLink>
                </li>
                <li
                  className={`nav-item ${
                    location.pathname === "/pricing" ? "active" : ""
                  }`}
                >
                  <NavLink className="nav-link" to="/pricing">
                    Pricing
                  </NavLink>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Resources
                  </a>
                  <ul className="dropdown-menu">
                    <li
                      className={`${
                        location.pathname === "/Blogs" ? "active" : ""
                      }`}
                    >
                      <NavLink className="dropdown-item" to="/Blogs">
                        Blogs
                      </NavLink>
                    </li>
                    <li
                      className={`${
                        location.pathname === "/Observability" ? "active" : ""
                      }`}
                    >
                      <NavLink className="dropdown-item" to="/Observability">
                        Observability
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li
                      className={`${
                        location.pathname === "/resources/something"
                          ? "active"
                          : ""
                      }`}
                    >
                      <NavLink
                        className="dropdown-item"
                        to="/resources/something"
                      >
                        Something else
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>

              <form className="d-flex" role="search">
                <GradientLink text={"Start for free"} to="/login" />
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
