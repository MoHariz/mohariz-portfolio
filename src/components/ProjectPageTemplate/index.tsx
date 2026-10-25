import React from 'react';
import PageWrapper from '@components/PageWrapper';
import Typography from '@components/Typography';
import { HeadFC, graphql, Link } from 'gatsby';
import { Tag } from '@chakra-ui/react';
import { WithAnimateOnScroll } from '@components/AnimateOnScroll';
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import ExternalLink from '@components/ExternalLink';
import Seo from '@components/Seo';
import './index.scss';

type ProjectPageTemplateProps = {
  data: {
    project: {
      id: string;
      title: string;
      content: string;
      excerpt: string;
      projectLinks: {
        github?: string;
        website?: string;
        publication?: string;
      };
      technologies: {
        nodes: {
          name: string;
        }[];
      };
      featuredImage?: {
        node: {
          altText: string;
          gatsbyImage: any;
          ogImage?: any;
        };
      };
    };
  };
};

export default function ProjectPageTemplate({ data }: ProjectPageTemplateProps) {
  const project = data.project;
  const image = getImage(project.featuredImage?.node.gatsbyImage);

  return (
    <PageWrapper
      pageStyles={{
        paddingTop: '57px'
      }}
      addProgressBar
    >
      <>
        <Link to='/projects' className='font-bold'>
          &#8592; BACK
        </Link>
        {project.featuredImage && image && (
          <GatsbyImage
            image={image}
            alt={project.featuredImage.node.altText}
            className='w-full object-cover rounded-md mt-8 border-solid border border-black dark:border-white'
          />
        )}
        <Typography className='mb-4 mt-8' variant='h1' bold>
          {project.title}
        </Typography>
        <div className='flex flex-wrap gap-2 justify-center sm:justify-start'>
          {project.technologies.nodes.map((tech) => {
            return <Tag key={tech.name}>{tech.name}</Tag>;
          })}
        </div>
        <div className='project-links flex flex-wrap gap-4 my-4 justify-center sm:justify-start'>
          {project.projectLinks.github && (
            <ExternalLink href={project.projectLinks.github}>
              Github <FontAwesomeIcon className='w-3 h-3' icon={faExternalLinkAlt} />
            </ExternalLink>
          )}
          {project.projectLinks.website && (
            <ExternalLink href={project.projectLinks.website}>
              Website <FontAwesomeIcon className='w-3 h-3' icon={faExternalLinkAlt} />
            </ExternalLink>
          )}
          {project.projectLinks.publication && (
            <ExternalLink href={project.projectLinks.publication}>
              Publication <FontAwesomeIcon className='w-3 h-3' icon={faExternalLinkAlt} />
            </ExternalLink>
          )}
        </div>
        <WithAnimateOnScroll amount={0}>
          <div
            className='project-content mb-8'
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </WithAnimateOnScroll>
      </>
    </PageWrapper>
  );
}

const stripHtml = (html: string) =>
  html
    .replace(/<[^>]*>?/gm, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, '\u2019')
    .replace(/&#8230;|\[&hellip;\]/g, '\u2026')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();

export const Head: HeadFC<ProjectPageTemplateProps['data']> = ({ data, location }) => {
  const { project } = data;
  const image = project.featuredImage?.node;

  return (
    <Seo
      title={project.title}
      description={stripHtml(project.excerpt)}
      pathname={location.pathname}
      image={image?.ogImage ? getSrc(image.ogImage) : undefined}
      imageAlt={image?.altText || project.title}
      type='article'
    />
  );
};

export const pageQuery = graphql`
  query ($ProjectId: String!) {
    project: wpProject(id: { eq: $ProjectId }) {
      id
      featuredImage {
        node {
          altText
          gatsbyImage(width: 880, height: 438, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          ogImage: gatsbyImage(width: 1200, height: 630, layout: FIXED, fit: COVER, formats: [JPG])
        }
      }
      title
      content
      excerpt
      projectLinks {
        github
        website
        publication
      }
      technologies {
        nodes {
          name
        }
      }
    }
  }
`;
