import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    const { mode, toggleMode } = this.props;

    return (
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsMonkey</Link>
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
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>

            {/* Dark Mode Toggle */}
            <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                onChange={toggleMode}
                checked={mode === 'dark'}
                id="modeSwitch"
              />
              <label className="form-check-label" htmlFor="modeSwitch">
                {mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
              </label>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
