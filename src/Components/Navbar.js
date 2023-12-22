import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-fluid">
        <nav className="navbar bg-body-tertiary"></nav>
        <button
          onClick={props.toggleblue}
          type="button"
          className="btn btn-primary mx-2 my-2"
        >
          Blue
        </button>
        <button
          onClick={props.togglegray}
          type="button"
          className="btn btn-secondary mx-2 my-2"
        >
          Gray
        </button>
        <button
          onClick={props.togglegreen}
          type="button"
          className="btn btn-success mx-2 my-2"
        >
          Green
        </button>
        <button
          onClick={props.togglered}
          type="button"
          className="btn btn-danger mx-2 my-2"
        >
          Red
        </button>
        <button
          onClick={props.toggleyellow}
          type="button"
          className="btn btn-warning mx-2 my-2"
        >
          Yellow
        </button>
        <button
          onClick={props.togglecyan}
          type="button"
          className="btn btn-info mx-2 my-2"
        >
          Cyan
        </button>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};
