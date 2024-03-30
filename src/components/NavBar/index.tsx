import { Link } from 'gatsby';
import React from 'react';
import { useNotAtPageTop } from '../../hooks/ScrollBehaviorHooks';
import ThemeToggle from '../ThemeToggle';

const NavBar: React.FC = () => {
  const isNotAtPageTop = useNotAtPageTop();

  return (
    <nav
      className={
        'flex fixed w-full lg:px-40 md:px-20 sm:px-10 px-5 py-4 inset-x-0 top-0 z-50  duration-200 border-b' +
        (isNotAtPageTop
          ? ' border-black dark:border-white bg-yellow-300 dark:backdrop-blur dark:bg-inherit'
          : ' border-transparent')
      }
    >
      <div
        className='flex justify-between items-center w-full'
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <ThemeToggle />

        <ul className='flex gap-4'>
          <li className='navbar-list-item'>
            <Link activeStyle={{ fontWeight: 'bold' }} to='/'>
              Home
            </Link>
          </li>
          <li className='navbar-list-item'>
            <Link activeStyle={{ fontWeight: 'bold' }} to='/projects'>
              Projects
            </Link>
          </li>
          <li className='navbar-list-item'>
            <a href='mailto:muhammadhariz206@gmail.com'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
