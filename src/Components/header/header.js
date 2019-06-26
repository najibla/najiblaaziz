import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <ul style={{ textAlign: 'center' }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dogs">Dogs</Link>
          </li>
          <li>
            <Link to="/cats">Cats</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
