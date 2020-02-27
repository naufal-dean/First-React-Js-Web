import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import './style.css';

const Header = (props) => {
  return (
    <header className="header">
        <nav className="headerMenu">
          <div>
            <ul>
              <li>
                <Link to="/" className="link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="link">About</Link>
              </li>
              <li>
                <Link to="/dashboard" className="link">Dashboard</Link>
              </li>
            </ul>
          </div>
        </nav>
    </header>
  )
}

export default Header
