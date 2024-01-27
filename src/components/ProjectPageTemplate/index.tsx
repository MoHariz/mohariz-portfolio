import React from "react";
import PageWrapper from "../PageWrapper";
import Typography from "../Typography";
import { HeadFC, graphql } from "gatsby";

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
        <PageWrapper>
            <>
                <Typography variant="h1">{project.title}</Typography>
                <Typography>
                    <div dangerouslySetInnerHTML={{ __html: project.content }} />
                </Typography>
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