import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'light', // light or dark
    };
  }

  toggleMode = () => {
    this.setState({
      mode: this.state.mode === 'light' ? 'dark' : 'light',
    });
  };

  render() {
    const { mode } = this.state;

    return (
      <Router>
        <div className={`app-wrapper bg-${mode} text-${mode === 'light' ? 'dark' : 'light'} min-vh-100`}>
          <Navbar mode={mode} toggleMode={this.toggleMode} />
          <div className="app-content">
            <Routes>
              <Route path="/" element={<Home mode={mode} />} />
              <Route path="/newsmonkey" element={<Home mode={mode} />} />
              <Route path="/news" element={<News mode={mode} />} />
              <Route path="/about" element={<About mode={mode} />} />
              <Route path="/contact" element={<Contact mode={mode} />} />
              <Route path="/privacy" element={<Privacy mode={mode} />} />
            </Routes>
          </div>
          <Footer mode={mode} />
        </div>
      </Router>
    );
  }
}
