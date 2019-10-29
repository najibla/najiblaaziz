import React from 'react';
import { Link } from 'react-router-dom';
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import './header.css';

const Header = () => {
  const reload = () => window.location.reload();

  return (
    <header>
      <nav>
        <ul style={{ textAlign: 'center' }}>
          <li>
            <Link to="/" onClick={reload}>
              <HomeOutlined fontSize="large" color="primary" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
