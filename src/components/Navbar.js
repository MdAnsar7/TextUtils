import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        props.mode || props.modeCopy
      } bg-${props.mode || props.modeCopy}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          <div className="d-flex">
            <div
              className="bg-primary rounded mx-2"
              onClick={() => {
                props.toggleMode("primary");
              }}
              style={{ height: "30px", width: "30px", cursor : 'pointer' , border : '2px solid blue '}}
            ></div>
            <div
              className="bg-danger rounded mx-2"
              onClick={() => {
                props.toggleMode("danger");
              }}
              style={{ height: "30px", width: "30px", cursor : 'pointer' , border : '2px solid red '}}
            ></div>
            <div
              className="bg-success rounded mx-2"
              onClick={() => {
                props.toggleMode("success");
              }}
              style={{ height: "30px", width: "30px", cursor : 'pointer' , border : '2px solid green '}}
            ></div>
            <div
              className="bg-warning rounded mx-2"
              onClick={() => {
                props.toggleMode("warning");
              }}
              style={{ height: "30px", width: "30px", cursor : 'pointer' , border : '2px solid yello ' }}
            ></div>
            <div
              className="bg-light rounded mx-2"
              onClick={() => {
                props.toggleMode("light");
              }}
              style={{ height: "30px", width: "30px", cursor : 'pointer' , border : '2px solid white ' }}
            ></div>
            <div
              className="bg-dark rounded mx-2"
              onClick={() => {
                props.toggleMode("dark");
              }}
              style={{ height: "30px", width: "30px", cursor : 'pointer' , border : '2px solid black '}}
            ></div>
          </div>
        </div>
        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          } mx-4`}
        >
        </div>
      </div>
    </nav>
  );
}
//  checks whether the title is coming from app.js is string or not if its any other data types then its throws error.....
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: " set Title here",
  aboutText: " set about here",
};
