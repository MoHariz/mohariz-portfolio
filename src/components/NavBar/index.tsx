import { Link } from 'gatsby';
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="sticky top-0 w-full bg-white px-10 py-4">
      <ul className="flex justify-end gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/about">About</Link>
        </li> */}
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <a href="mailto:muhammadhariz206@gmail.com">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
