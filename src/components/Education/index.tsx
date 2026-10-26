import React from 'react';
import Typography from '@components/Typography';
import SectionHeading from '@components/SectionHeading';
import { WithAnimateOnScroll } from '@components/AnimateOnScroll';
import { Tag } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Education() {
  return (
    <div className='py-8'>
      <SectionHeading>Education</SectionHeading>
      <WithAnimateOnScroll amount={0.2}>
        <div className='flex flex-col lg:flex-row gap-3 lg:gap-6'>
          <div className='w-full lg:w-1/4 flex flex-row lg:flex-col flex-wrap items-center lg:items-start gap-2 lg:pt-4'>
            <Typography variant='p' className='font-semibold mb-0'>
              2016 &ndash; 2019
            </Typography>
            <Tag variant='outline'>
              <FontAwesomeIcon className='w-3 h-3 mr-2' icon={faLocationDot} />
              Seattle, WA
            </Tag>
          </div>
          <div className='w-full lg:w-3/4 rounded-md border border-solid border-black dark:border-white p-4 md:p-5'>
            <Typography variant='h6' bold>
              University of Washington
            </Typography>
            <Typography className='mb-0' variant='p'>
              Bachelor of Science in Informatics
            </Typography>
          </div>
        </div>
      </WithAnimateOnScroll>
    </div>
  );
}
