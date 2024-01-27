import React from "react";
import PageWrapper from "../components/PageWrapper";
import { HeadFC, Link, graphql } from "gatsby";
import Typography from "../components/Typography";

type ProjectsPageProps = {
    data: {
        projects: {
            nodes: {
                id: string;
                title: string;
                slug: string;
                featuredImage?: {
                    node: {
                        sourceUrl: string;
                    }
                }
                technologies: {
                    nodes: {
                        name: string;
                    }[];
                };
            }[];
        };
    };
};

export default function ProjectsPage({ data }: ProjectsPageProps) {

    // console.log(data)

    return (
        <PageWrapper hideFooter>
            <>
                <Typography variant="h1">Projects</Typography>
                {
                    data.projects.nodes.map(project => {
                        return (
                            <Typography key={project.id}>
                                <Link to={project.slug}>{project.title}</Link>
                            </Typography>
                        )
                    })
                }
            </>
        </PageWrapper>
    )
}

export const Head: HeadFC = () => <title>Muhammad Hariz | Projects</title>

export const pageQuery = graphql`
  query {
    projects: allWpProject {
        nodes {
            id
            title
            slug
            featuredImage {
                node {
                  sourceUrl
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
`