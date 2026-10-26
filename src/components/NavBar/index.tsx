import { Link } from 'gatsby';
import React from 'react';
import { useNotAtPageTop } from '@hooks/ScrollBehaviorHooks';
import ThemeToggle from '@components/ThemeToggle';

const navLink = 'underline-offset-4 decoration-2 hover:underline';

const NavBar: React.FC = () => {
  const isNotAtPageTop = useNotAtPageTop();

  return (
    <nav
      className={
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200' +
        (isNotAtPageTop
          ? ' border-black dark:border-white bg-yellow-300 dark:backdrop-blur dark:bg-[#1A202C]/80'
          : ' border-transparent')
      }
    >
      <div
        className='flex justify-between items-center w-full lg:px-40 md:px-20 sm:px-10 px-5 py-4'
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <ThemeToggle />

        <ul className='flex gap-5'>
          <li>
            <Link className={navLink} activeStyle={{ fontWeight: 'bold' }} to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link
              className={navLink}
              activeStyle={{ fontWeight: 'bold' }}
              partiallyActive
              to='/projects'
            >
              Projects
            </Link>
          </li>
          <li>
            <a className={navLink} href='mailto:muhammadhariz206@gmail.com'>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
