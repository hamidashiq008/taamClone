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
      <div className="header-container" data-aos="fade-down">
        <nav className="navbar navbar-expand-md p-0">
          <div className="container-fluid" style={{ maxWidth: 840 }}>
            <div className="img-wrapper d-flex">
              <div className="me-2">
                <img src={logoImg} alt="Logo" width={30} height={30} />
              </div>
              <div>
                <h5>TAAM AI</h5>
              </div>
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
                  <ul className="dropdown-menu px-3">
                    <li
                      className={`${
                        location.pathname === "/download"
                          ? "active"
                          : ""
                      }`}
                    >
                      <div className="d-flex">
                        <div className="mt-1 me-1">
                          <i class="bi bi-download text-white"></i>
                        </div>
                        <div>
                          <NavLink
                            className="dropdown-item text-decoration-none p-1"
                            style={{ fontSize: "13px" }}
                            to="/download"
                          >
                            Downloads
                            <p
                              className="py-0 m-0"
                              style={{ fontSize: "10px", color: "#d9d9d9" }}
                            >
                              Download Taam AI Code-ai to boost your app with
                              AI.
                            </p>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                    <li
                      className={`${
                        location.pathname === "/Blogs" ? "active" : ""
                      }`}
                    >
                      <div className="d-flex">
                        <div className="mt-1 me-1">
                          <i class="bi bi-file-text text-white"></i>
                        </div>
                        <div>
                          <NavLink
                            className="dropdown-item text-decoration-none p-1"
                            to="/Blogs"
                            style={{ fontSize: "13px" }}
                          >
                            Blogs
                            <p
                              className="py-0 m-0"
                              style={{ fontSize: "10px", color: "#d9d9d9" }}
                            >
                              Read our blog for AI coding insights and tips..
                            </p>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                    <li
                      className={`${
                        location.pathname === "/Observability" ? "active" : ""
                      }`}
                    >
                      <div className="d-flex">
                        <div className="mt-1 me-1">
                          <i class="bi bi-file-text text-white"></i>
                        </div>
                        <div>
                          <NavLink
                            className="dropdown-item text-decoration-none p-1"
                            to="/Observability"
                            style={{ fontSize: "13px" }}
                          >
                            Observability
                            <p
                              className="py-0 m-0"
                              style={{ fontSize: "10px", color: "#d9d9d9" }}
                            >
                              Real-time visibility, actionable metrics
                            </p>
                          </NavLink>
                        </div>
                      </div>
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
