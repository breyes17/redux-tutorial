import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Redux with old setup</Link>
        </li>
        <li>
          <Link to="/hooks">Redux with hooks setup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
