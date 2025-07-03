import React from 'react'

import logoImg from '../../public/logo.svg';
const Header = () => {
    return (
        <div>
            <header>
                <div className="header-container">
                    <nav className="navbar navbar-expand-lg p-0">
                        <div className="container-fluid">
                            {/* Logo */}
                            <div className="img-wrapper">
                                <img src={logoImg} alt="Logo" />
                            </div>
                            {/* Navbar Toggle Button (for mobile) */}
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
                            {/* Nav Links */}
                            <div
                                className="collapse navbar-collapse header-navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Models
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Another action
                                                </a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            Docs
                                        </a>
                                    </li>
                                   
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">
                                            Pricing
                                        </a>
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
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Action
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Another action
                                                </a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    Something else here
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                                {/* Search Form */}
                              
                            </div>
                              <form className="d-flex" role="search">
                                    {/* <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder="Search"
                                        aria-label="Search"
                                    /> */}
                                    <button className="btn text-white login-btn" type="submit">
                                        Login
                                    </button>
                                </form>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header
