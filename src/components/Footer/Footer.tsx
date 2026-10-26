import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ExternalLink from '@components/ExternalLink';

const iconLink = 'transition-transform duration-150 hover:-translate-y-0.5';

const Footer: React.FC = () => {
  return (
    <footer className='w-full'>
      <div
        className='flex justify-between items-center w-full gap-4 lg:px-40 md:px-20 sm:px-10 px-5 py-8'
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <p className='m-0 text-xs tracking-wide opacity-70'>
          © {new Date().getFullYear()} MUHAMMAD HARIZ
        </p>

        <div className='flex gap-4'>
          <ExternalLink className={iconLink} href={process.env.GATSBY_LINKEDIN_URL || ''}>
            <FontAwesomeIcon className='w-5 h-5' icon={faLinkedin} />
          </ExternalLink>
          <ExternalLink className={iconLink} href={process.env.GATSBY_GITHUB_LINK || ''}>
            <FontAwesomeIcon className='w-5 h-5' icon={faGithub} />
          </ExternalLink>
          <ExternalLink className={iconLink} href={process.env.GATSBY_RESUME_LINK || ''}>
            <FontAwesomeIcon className='w-5 h-5' icon={faFile} />
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
