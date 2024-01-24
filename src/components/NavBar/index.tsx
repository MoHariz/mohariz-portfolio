import { Link } from 'gatsby';
import React from 'react';
import useHasScrolledDown from '../../hooks/UseHasScrolledDown';

const NavBar: React.FC = () => {
  const haScrolled = useHasScrolledDown();

  return (
    <nav className={"sticky w-full px-10 py-4 inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b" + (haScrolled ? " bg-zinc-900/500  border-zinc-800" : " bg-zinc-900/0 border-transparent")}>
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
