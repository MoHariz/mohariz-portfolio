import React from 'react';
import Typography from '@components/Typography';
import SectionHeading from '@components/SectionHeading';
import { WithAnimateOnScroll } from '@components/AnimateOnScroll';
import ExternalLink from '@components/ExternalLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Tag } from '@chakra-ui/react';
import './index.scss';

export type ExperienceNodeProps = {
  title: string;
  experienceDetail: {
    companyUrl: string;
    companyLocation: string;
    roleTitle: string;
    startDate: string;
    endDate: string;
  };
  content: string;
};

type ExperiencesProps = {
  experiences: ExperienceNodeProps[];
};

export default function Experiences({ experiences }: ExperiencesProps) {
  return (
    <div className='py-8'>
      <SectionHeading>Experience</SectionHeading>
      <div className='flex flex-col lg:gap-8 gap-10'>
        {experiences.map((experience) => {
          return (
            <WithAnimateOnScroll
              amount={0.2}
              key={`${experience.title}-${experience.experienceDetail.roleTitle}-${experience.experienceDetail.startDate}`}
            >
              <div className='flex flex-col lg:flex-row gap-3 lg:gap-6'>
                <div className='w-full lg:w-1/4 flex flex-row lg:flex-col flex-wrap items-center lg:items-start gap-2 lg:pt-4'>
                  <Typography variant='p' className='font-semibold mb-0'>
                    {experience.experienceDetail.startDate} &ndash;{' '}
                    {experience.experienceDetail.endDate}
                  </Typography>
                  <Tag variant='outline'>
                    <FontAwesomeIcon className='w-3 h-3 mr-2' icon={faLocationDot} />
                    {experience.experienceDetail.companyLocation}
                  </Tag>
                </div>
                <div className='w-full lg:w-3/4 rounded-md border border-solid border-black dark:border-white p-4 md:p-5'>
                  <Typography variant='h6' as='h3' className='mb-2'>
                    <span className='font-bold'>{experience.experienceDetail.roleTitle}</span>
                    <span className='opacity-60'> &middot; </span>
                    {experience.experienceDetail.companyUrl ? (
                      <ExternalLink
                        className='inline-flex items-center gap-1.5 underline-offset-4 decoration-2 hover:underline'
                        href={experience.experienceDetail.companyUrl}
                      >
                        {experience.title}
                        <FontAwesomeIcon className='w-3 h-3' icon={faExternalLinkAlt} />
                      </ExternalLink>
                    ) : (
                      experience.title
                    )}
                  </Typography>
                  <div
                    className='experience-content'
                    dangerouslySetInnerHTML={{ __html: experience.content }}
                  />
                </div>
              </div>
            </WithAnimateOnScroll>
          );
        })}
      </div>
    </div>
  );
}
