import React from "react";
import PageWrapper from "../PageWrapper";
import Typography from "../Typography";
import { HeadFC, graphql, Link } from "gatsby";
import "./index.css";
import { Tag } from '@chakra-ui/react'
import AnimateOnScroll from "../../AnimateOnScroll";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

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
            }
            featuredImage?: {
                node: {
                    altText: string;
                    gatsbyImage: any;
                }
            }
        }
    };
};

export default function ProjectPageTemplate({ data }: ProjectPageTemplateProps) {
    const project = data.project;
    const image = getImage(project.featuredImage?.node.gatsbyImage);

    return (
        <PageWrapper
            pageStyles={{
                paddingTop: "57px",
            }}
            addProgressBar
        >
            <>
                <Link to="/projects" className="font-bold">&#8592; BACK</Link>
                {project.featuredImage && (
                    <GatsbyImage image={image} alt={project.featuredImage.node.altText} className="w-full object-cover rounded-md mt-8 border-solid border border-black dark:border-white" />
                )}
                <Typography className="mb-4 mt-8" variant="h1" bold>{project.title}</Typography>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {
                        project.technologies.nodes.map(tech => {
                            return (
                                <Tag key={tech.name}>{tech.name}</Tag>
                            )
                        })
                    }
                </div>
                <div className="project-links flex flex-wrap gap-4 my-4 justify-center sm:justify-start">
                    {
                        project.projectLinks.github && (
                            <Link to={project.projectLinks.github} target="_blank" rel="noreferrer">Github <FontAwesomeIcon className="w-3 h-3" icon={faExternalLinkAlt} /></Link>
                        )
                    }
                    {
                        project.projectLinks.website && (
                            <Link to={project.projectLinks.website} target="_blank" rel="noreferrer">Website <FontAwesomeIcon className="w-3 h-3" icon={faExternalLinkAlt} /></Link>
                        )
                    }
                    {
                        project.projectLinks.publication && (
                            <Link to={project.projectLinks.publication} target="_blank" rel="noreferrer">Publication <FontAwesomeIcon className="w-3 h-3" icon={faExternalLinkAlt} /></Link>
                        )
                    }
                </div>
                <AnimateOnScroll oneDirectional animationName="fade-up" animationDuration="1s" animationDelay="0.5s" threshold={0.1}>
                    <div className="project-content mb-8" dangerouslySetInnerHTML={{ __html: project.content }} />
                </AnimateOnScroll>
            </>
        </PageWrapper>
    );
}

export const Head: HeadFC = (data) => {
    return (
        <>
            <html lang="en" />
            <title>{`Muhammad Hariz | Projects - ${data.data.project.title}`}</title>
            <meta name="description" content={data.data.project.excerpt.replace(/<[^>]*>?/gm, '')} />
        </>
    );
}

export const pageQuery = graphql`
  query ($ProjectId: String!) {
    project: wpProject(id: {eq: $ProjectId}) {
        id
        featuredImage {
          node {
            altText
            gatsbyImage(width: 880, height: 438, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
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