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
                }
            }
        }
    };
};

export default function ProjectPageTemplate({ data }: ProjectPageTemplateProps) {
    const project = data.project;

    // console.log(project);

    return (
        <PageWrapper hideFooter>
            <>
                <Link to="/projects">&#8592; Back</Link>
                {project.featuredImage && <img className="w-full rounded-md mt-8" src={project.featuredImage.node.sourceUrl} alt="Project Image" />}
                <Typography className="mb-4 mt-8" variant="h1">{project.title}</Typography>
                <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
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
                            <a href={project.projectLinks.github} target="_blank" rel="noreferrer">Github &#8594;</a>
                        )
                    }
                    {
                        project.projectLinks.website && (
                            <a href={project.projectLinks.website} target="_blank" rel="noreferrer">Website &#8594;</a>
                        )
                    }
                    {
                        project.projectLinks.publication && (
                            <a href={project.projectLinks.publication} target="_blank" rel="noreferrer">Publication &#8594;</a>
                        )
                    }
                </div>
                <div className="project-content" dangerouslySetInnerHTML={{ __html: project.content }} />
            </>
        </PageWrapper>
    );
}

export const Head: HeadFC = (data) => {
    return (
        <title>{data.data.project?.title}</title>
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