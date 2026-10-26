import React from 'react';
import Typography from '@components/Typography';
import SectionHeading from '@components/SectionHeading';
import { WithAnimateOnScroll } from '@components/AnimateOnScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import './index.scss';

export type AboutMeProps = {
  featuredImage: {
    node: {
      altText: string;
      gatsbyImage: any;
    };
  };
  content: string;
};

export default function AboutMe({ featuredImage, content }: AboutMeProps) {
  const image = getImage(featuredImage.node.gatsbyImage);

  return (
    <div className='py-8'>
      <SectionHeading>About Me</SectionHeading>
      <WithAnimateOnScroll amount={0.2}>
        <div className='flex flex-col gap-4'>
          {image && (
            <GatsbyImage
              image={image}
              alt={featuredImage.node.altText}
              className='w-1/3 lg:w-1/4 rounded-md border border-solid border-black dark:border-white'
            />
          )}
          <Typography className='mb-0' variant='p' as='div'>
            <div className='about-me-content' dangerouslySetInnerHTML={{ __html: content }} />
          </Typography>
          <div className='flex justify-center my-6'>
            <a
              href='mailto:muhammadhariz206@gmail.com'
              className='inline-flex items-center gap-3 px-6 py-3 font-bold rounded-md border-2 border-black bg-yellow-300 text-black shadow-[4px_4px_0_0_#000] transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#000] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_#000] dark:border-white dark:shadow-[4px_4px_0_0_#fff] dark:hover:shadow-[6px_6px_0_0_#fff]'
            >
              <FontAwesomeIcon icon={faEnvelope} className='w-5 h-5' />
              Get in touch
            </a>
          </div>
        </div>
      </WithAnimateOnScroll>
    </div>
  );
}
