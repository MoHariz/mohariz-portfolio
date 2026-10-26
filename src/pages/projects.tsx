import React from 'react';
import PageWrapper from '@components/PageWrapper';
import { HeadFC, Link, graphql } from 'gatsby';
import Typography from '@components/Typography';
import { Tag } from '@chakra-ui/react';
import { WithAnimateOnScroll } from '@components/AnimateOnScroll';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import With3DHover from '@components/With3DHover';
import Seo from '@components/Seo';
import SectionHeading from '@components/SectionHeading';

type ProjectNodeProps = {
  id: string;
  title: string;
  slug: string;
  featuredImage?: {
    node: {
      altText: string;
      gatsbyImage: any;
    };
  };
  technologies: {
    nodes: {
      name: string;
    }[];
  };
};

type ProjectsPageProps = {
  data: {
    projects: {
      nodes: ProjectNodeProps[];
    };
  };
};

export default function ProjectsPage({ data }: ProjectsPageProps) {
  return (
    <PageWrapper
      pageStyles={{
        paddingTop: '104px'
      }}
    >
      <>
        <SectionHeading variant='h1' className='mb-12'>
          Projects
        </SectionHeading>
        <div className='flex flex-col gap-16 lg:gap-12 mb-12'>
          {data.projects.nodes.map((project) => {
            return <ProjectCard key={project.id} {...project} />;
          })}
        </div>
      </>
    </PageWrapper>
  );
}

function ProjectCard({ title, slug, featuredImage, technologies }: ProjectNodeProps) {
  const image = getImage(featuredImage?.node ?? null);

  return (
    <WithAnimateOnScroll amount={0.2}>
      <Link to={slug} className='group block'>
        <div className='lg:flex lg:gap-8 lg:items-center'>
          <div className='flex flex-col justify-center lg:w-1/2' style={{ perspective: '1000px' }}>
            <With3DHover>
              {image && (
                <GatsbyImage
                  style={{ perspective: '1000px' }}
                  image={image}
                  alt={featuredImage?.node.altText || title}
                  className='object-cover rounded-md border border-solid border-black dark:border-white transition-shadow duration-200 group-hover:shadow-[6px_6px_0_0_#000] dark:group-hover:shadow-[6px_6px_0_0_#fde047]'
                />
              )}
            </With3DHover>
          </div>
          <div className='mt-4 lg:mt-0 lg:w-1/2'>
            <Typography
              variant='h2'
              bold
              className='group-hover:underline underline-offset-4 decoration-yellow-300 decoration-4'
            >
              {title}
            </Typography>
            <div className='flex flex-wrap gap-2 lg:my-4 my-2'>
              {technologies.nodes.map((tech) => {
                return <Tag key={tech.name}>{tech.name}</Tag>;
              })}
            </div>
            <span className='inline-flex items-center gap-1 font-bold'>
              READ MORE
              <span
                aria-hidden
                className='transition-transform duration-150 group-hover:translate-x-1'
              >
                &#8594;
              </span>
            </span>
          </div>
        </div>
      </Link>
    </WithAnimateOnScroll>
  );
}

export const Head: HeadFC = ({ location }) => {
  return (
    <Seo
      title='Projects'
      description='A list of my professional and personal projects.'
      pathname={location.pathname}
    />
  );
};

export const pageQuery = graphql`
  query {
    projects: allWpProject(sort: { date: DESC }) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            altText
            gatsbyImage(width: 863, height: 430, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        technologies {
          nodes {
            name
          }
        }
      }
    }
  }
`;
