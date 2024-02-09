import React from "react";
import PageWrapper from "../PageWrapper";
import Typography from "../Typography";
import { HeadFC, graphql, Link } from "gatsby";
import "./index.css";
import { Tag } from '@chakra-ui/react'

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
                    sourceUrl: string;
                    altText: string;
                }
            }
        }
    };
};

export default function ProjectPageTemplate({ data }: ProjectPageTemplateProps) {
    const project = data.project;

    return (
        <PageWrapper>
            <>
                <Link to="/projects">&#8592; Back</Link>
                {project.featuredImage && <img className="w-full object-cover rounded-md mt-8 border-solid border border-black dark:border-white" src={project.featuredImage.node.sourceUrl} alt={project.featuredImage.node.altText} />}
                <Typography className="mb-4 mt-8" variant="h1">{project.title}</Typography>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {
                        project.technologies.nodes.map(tech => {
                            return (
                                <Tag key={tech.name} colorScheme="teal">{tech.name}</Tag>
                            )
                        })
                    }
                </div>
                <div className="project-links flex flex-wrap gap-4 my-4 justify-center sm:justify-start">
                    {
                        project.projectLinks.github && (
                            <Link to={project.projectLinks.github} target="_blank" rel="noreferrer">Github &#8594;</Link>
                        )
                    }
                    {
                        project.projectLinks.website && (
                            <Link to={project.projectLinks.website} target="_blank" rel="noreferrer">Website &#8594;</Link>
                        )
                    }
                    {
                        project.projectLinks.publication && (
                            <Link to={project.projectLinks.publication} target="_blank" rel="noreferrer">Publication &#8594;</Link>
                        )
                    }
                </div>
                <div className="project-content mb-8" dangerouslySetInnerHTML={{ __html: project.content }} />
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
            sourceUrl
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