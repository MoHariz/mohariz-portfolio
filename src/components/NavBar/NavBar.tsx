import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav>
      {/* Navigation content goes here */}
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
