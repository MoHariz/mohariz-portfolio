import React from "react";
import PageWrapper from "../components/PageWrapper";
import { HeadFC, Link, graphql } from "gatsby";
import Typography from "../components/Typography";
import { Tag } from '@chakra-ui/react'


type ProjectNodeProps = {
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
}

type ProjectsPageProps = {
    data: {
        projects: {
            nodes: ProjectNodeProps[];
        };
    };
};

export default function ProjectsPage({ data }: ProjectsPageProps) {

    // console.log(data)

    return (
        <PageWrapper hideFooter>
            <>
                <Typography className="mb-8" variant="h1">Projects</Typography>
                <div className="flex flex-col lg:gap-8 sm:gap-20 gap-20 mb-8">
                    {
                        data.projects.nodes.map(project => {
                            return (
                                <ProjectCard key={project.id} {...project} />
                            )
                        })
                    }
                </div>
            </>
        </PageWrapper>
    )
}

function ProjectCard({ title, slug, featuredImage, technologies }: ProjectNodeProps) {

    return (
        <Link to={slug}>
             <div className="lg:flex lg:gap-4 hover:-translate-y-1 hover:scale-105 duration-200">
                <img 
                    className="object-cover rounded-md lg:w-1/2" 
                    src={featuredImage?.node.sourceUrl} alt={featuredImage?.node.altText} 
                    style={{ border: "1px solid black" }}
                />
                <div className="lg:py-8">
                    <Typography variant="h2">{title}</Typography>
                    <div className="flex flex-wrap gap-4">
                        {
                            technologies.nodes.map(tech => {
                                return (
                                    <Tag key={tech.name} colorScheme="teal">{tech.name}</Tag>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}

export const Head: HeadFC = () => <title>Muhammad Hariz | Projects</title>

export const pageQuery = graphql`
  query {
    projects: allWpProject(sort: {date: DESC}) {
        nodes {
            id
            title
            slug
            featuredImage {
                node {
                  sourceUrl
                  altText
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