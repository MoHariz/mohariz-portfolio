import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Tooltip } from '@chakra-ui/react';
import ExternalLink from '@components/ExternalLink';
import Typography from '@components/Typography';
import { Typewriter } from 'react-simple-typewriter';

const Hero: React.FC = () => {
  const verbs = ['connect!', 'design!', 'implement!', 'test!', 'ask all the questions!'];

  return (
    <div
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <div>
        <Typography variant='h1' bold>
          Hi, I&apos;m Muhammad.
        </Typography>
        <Typography variant='h3' className='mt-4'>
          I am a full-stack software engineer with interests in front-end development, software
          infrastructure, and data analytics.
        </Typography>
        <Typography variant='h3' className='mt-4'>
          Let&apos;s <Typewriter words={verbs} loop={5} cursor cursorStyle='|' />
        </Typography>

        <div className='flex gap-4 lg:mt-30 md:mt-20 mt-10'>
          <ExternalLink className='relative' href={process.env.GATSBY_LINKEDIN_URL || ''}>
            <Tooltip label='LinkedIn'>
              <FontAwesomeIcon className='w-8 h-8' icon={faLinkedin} />
            </Tooltip>
          </ExternalLink>
          <ExternalLink className='relative' href={process.env.GATSBY_GITHUB_LINK || ''}>
            <Tooltip label='Github'>
              <FontAwesomeIcon className='w-8 h-8' icon={faGithub} />
            </Tooltip>
          </ExternalLink>
          <ExternalLink href={process.env.GATSBY_RESUME_LINK || ''}>
            <Tooltip label='Resume'>
              <FontAwesomeIcon className='w-8 h-8' icon={faFile} />
            </Tooltip>
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
