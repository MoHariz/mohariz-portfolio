import { Link } from 'gatsby';
import React from 'react';
import { useNotAtPageTop } from '../../hooks/ScrollBehaviorHooks';
import './index.css';
const NavBar: React.FC = () => {
  const isNotAtPageTop = useNotAtPageTop();

  return (
    <nav className={"sticky w-full px-10 py-4 inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b" + (isNotAtPageTop ? " bg-zinc-900/500  border-zinc-800" : " bg-zinc-900/0 border-transparent")}>
      <ul className="flex justify-end gap-4">
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
