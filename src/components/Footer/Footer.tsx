import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

const Footer: React.FC = () => {
  return (
    <footer className='w-full lg:px-40 md:px-20 sm:px-10 px-5 py-4'>
      <div className='flex justify-between items-center w-full' style={{ maxWidth: '1200px', margin: '0 auto'}}>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} Muhammad Hariz</p>

        <div className='flex gap-4'>
          <Link className="relative" target="_blank" to={process.env.GATSBY_LINKEDIN_URL || ""}>
            <FontAwesomeIcon className="w-5 h-5" icon={faLinkedin} />
          </Link>
          <Link target="_blank" to={process.env.GATSBY_RESUME_LINK || ""}>
            <FontAwesomeIcon className="w-5 h-5" icon={faFile} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
