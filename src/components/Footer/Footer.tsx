import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'gatsby';

const Footer: React.FC = () => {
  return (
    <footer className='w-full lg:px-40 md:px-20 sm:px-10 px-5 py-4'>
      <div className='flex justify-between items-center w-full gap-4' style={{ maxWidth: '1200px', margin: '0 auto'}}>
        <p className='text-gray' style={{ margin: 0, fontSize: '0.50rem' }}>© {new Date().getFullYear()} MUHAMMAD HARIZ</p>

        <div className='flex gap-4'>
          <Link className="relative" target="_blank" to={process.env.GATSBY_LINKEDIN_URL || ""}>
            <FontAwesomeIcon className="w-5 h-5" icon={faLinkedin} />
          </Link>
          <Link className="relative" target="_blank" to={process.env.GATSBY_GITHUB_LINK || ""}>
            <FontAwesomeIcon className="w-5 h-5" icon={faGithub} />
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
