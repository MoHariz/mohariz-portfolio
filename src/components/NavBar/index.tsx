import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="sticky top-0 w-full bg-white px-10 py-4">
      <ul className="flex justify-end gap-4">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="mailto:muhammadhariz206@gmail.com">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
