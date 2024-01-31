import { Link } from 'gatsby';
import React from 'react';
import { useNotAtPageTop } from '../../hooks/ScrollBehaviorHooks';
import './index.css';
import ThemeToggle from '../ThemeToggle';

const NavBar: React.FC = () => {
  const isNotAtPageTop = useNotAtPageTop();

  return (
    <nav className={"flex justify-between items-center sticky w-full px-10 py-4 inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b" + (isNotAtPageTop ? " border-black dark:border-white" : " border-transparent")}>
      <ThemeToggle />

      <ul className="flex gap-4">
        <li className="navbar-list-item">
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/about">About</Link>
        </li> */}
        <li className="navbar-list-item">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="navbar-list-item">
          <a href="mailto:muhammadhariz206@gmail.com">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
