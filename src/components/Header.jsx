import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div>
      <header>
        <div className="header-container">
          <nav className="navbar navbar-expand-md p-0">
            <div className="container-fluid" style={{maxWidth: 820}}>
              <div className="img-wrapper">
                <img src={logoImg} alt="Logo" />
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
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      AI Gateway
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Features">
                      Features
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/pricing">
                      Pricing
                    </NavLink>
                  </li>

                  {/* Dropdown: Resources */}
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
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/resources/action"
                        >
                          Action
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to="/resources/another"
                        >
                          Another action
                        </NavLink>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
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
                  <NavLink className="btn text-white login-btn" to="/login">
                    Login
                  </NavLink>
                </form>
                {/* Login Button */}
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
