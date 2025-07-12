import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logoImg from "../assets/images/logo1.svg";
import {
  SimpleButton,
  SimpleLink,
  GradientButton,
  GradientLink,
} from "../Partials/CustomButton";

import BlackImage from "../assets/images/images.jpeg";

const Header = () => {
  const location = useLocation(); // 👈 Get current route path

  return (
    <header>
      <div className="header-container" data-aos="fade-down">
        <nav className="navbar navbar-expand-md p-0">
          <div className="container-fluid justify-content-center parent-img-wrapper" style={{ maxWidth: 840 }}>
            <div
              className="img-wrapper d-flex gap-2 ms-0 md-ms-0 adjust-img-wrapper-head justify-content-between 
               py-4 px-2 py-md-0 px-md-0"
            >
              <NavLink className="nav-link" to="/">
                <img src={logoImg} alt="Logo" width={25} height={25} />
                <span className="ms-2 header-logo-title">TAAM AI</span>
              </NavLink>
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
            </div>

            <div
              className="collapse navbar-collapse header-navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-0">
                <li
                  className={`my-2 my-md-0 nav-item ${
                    location.pathname === "/ai-gateway" ? "active" : ""
                  }`}
                >
                  <NavLink className="nav-link" to="/ai-gateway">
                    AI Gateway
                  </NavLink>
                </li>
                <li
                  className={`my-2 my-md-0 nav-item ${
                    location.pathname === "/Features" ? "active" : ""
                  }`}
                >
                  <NavLink className="nav-link" to="/Features">
                    Features
                  </NavLink>
                </li>
                <li
                  className={`my-2 my-md-0 nav-item ${
                    location.pathname === "/pricing" ? "active" : ""
                  }`}
                >
                  <NavLink className="nav-link" to="/pricing">
                    Pricing
                  </NavLink>
                </li>

                <li className="my-2 my-md-0 nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Resources
                  </a>
                  <ul
                    className="dropdown-menu p-3 px-4"
                    style={{
                      top: 65,
                      borderRadius: "16px",
                      background: "#343434d1",
                    }}
                  >
                    <img
                      src={BlackImage}
                      alt=""
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: "100%",
                        height: "100%",
                        opacity: "0.7",
                        filter: "blur(20px)",
                        backdropFilter: "blur(20px)",
                      }}
                    />
                    <li
                      className={`${
                        location.pathname === "/download" ? "active" : ""
                      } mb-10 position-relative`}
                    >
                      <div className="d-flex">
                        <div className="mt-1 me-1">
                          <i className="bi bi-download text-white"></i>
                        </div>
                        <div>
                          <NavLink
                            className="dropdown-item text-decoration-none p-1"
                            style={{ fontSize: "14px" }}
                            to="/download"
                          >
                            Downloads
                            <p
                              className="py-0 m-0"
                              style={{
                                fontSize: "9px",
                                color: "rgb(217, 217, 217)",
                                fontWeight: "300",
                              }}
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
                      } mb-10 position-relative`}
                    >
                      <div className="d-flex">
                        <div className="mt-1 me-1">
                          <i className="bi bi-file-text text-white"></i>
                        </div>
                        <div>
                          <NavLink
                            className="dropdown-item text-decoration-none p-1"
                            to="/Blogs"
                            style={{ fontSize: "14px" }}
                          >
                            Blogs
                            <p
                              className="py-0 m-0"
                              style={{
                                fontSize: "9px",
                                color: "rgb(217, 217, 217)",
                                fontWeight: "300",
                              }}
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
                      } mb-10 position-relative`}
                    >
                      <div className="d-flex">
                        <div className="mt-1 me-1">
                          <i className="bi bi-file-text text-white"></i>
                        </div>
                        <div>
                          <NavLink
                            className="dropdown-item text-decoration-none p-1"
                            to="/Observability"
                            style={{ fontSize: "14px" }}
                          >
                            Observability
                            <p
                              className="py-0 m-0"
                              style={{
                                fontSize: "9px",
                                color: "rgb(217, 217, 217)",
                                fontWeight: "300",
                              }}
                            >
                              Real-time visibility, actionable metrics
                            </p>
                          </NavLink>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>

                {/* ✅ Mobile only: Start for Free inside <ul> */}
                <li className="d-md-none mt-3 adjust-form d-flex bg-dark">
                  <form
                    className="d-flex mx-auto mb-3 mt-4"
                    role="search"
                    onClick={() =>
                      (window.location.href = "https://app.taam.ai/auth/login")
                    }
                  >
                    <button
                      class="simpleBgBtn w-100"
                      type="button"
                      fdprocessedid="i8gifj"
                    >
                      <img alt="" src="/src/assets/images/simple-btn-bg.png" />
                      <div class="inner-content">
                        <p class="m-0">start for free</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 256 256"
                          stroke="#fff"
                          fill="#fff"
                        >
                          <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                        </svg>
                      </div>
                      <div class="button-glow"></div>
                    </button>
                  </form>
                </li>
              </ul>

              {/* ✅ Desktop only: Start for Free outside <ul> */}
              <form
                className="d-none d-md-flex"
                role="search"
                onClick={() =>
                  (window.location.href = "https://app.taam.ai/auth/login")
                }
              >
                <GradientLink
                  text={"start for free"}
                  to="https://app.taam.ai/auth/login"
                />
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
