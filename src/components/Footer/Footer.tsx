import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

const Footer: React.FC = () => {
  return (
    <footer className='w-full flex justify-center items-center px-10 py-4' style={{ maxWidth: '1200px', margin: '0 auto'}}>
      <div className='flex justify-between items-center w-full'>
        <p style={{ margin: 0 }}>© {new Date().getFullYear()} Muhammad Hariz</p>

        <div className='flex gap-4'>
          <Link className="relative" target="_blank" to={process.env.LINKEDIN_URL || ""}>
            <FontAwesomeIcon className="w-5 h-5" icon={faLinkedin} />
          </Link>
          <Link target="_blank" to={process.env.RESUME_LINK || ""}>
            <FontAwesomeIcon className="w-5 h-5" icon={faFile} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
