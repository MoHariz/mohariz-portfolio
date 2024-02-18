import React from "react";
import PageWrapper from "../components/PageWrapper";
import { HeadFC, Link, graphql } from "gatsby";
import Typography from "../components/Typography";
import { Tag } from '@chakra-ui/react'
import AnimateOnScroll from "../AnimateOnScroll";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

type ProjectNodeProps = {
    id: string;
    title: string;
    slug: string;
    featuredImage?: {
        node: {
            altText: string;
            gatsbyImage: any;
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

    return (
        <PageWrapper>
            <>
                <Typography className="mb-8" variant="h1" bold>PROJECTS</Typography>
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

    const image = getImage(featuredImage?.node);

    return (
        <AnimateOnScroll oneDirectional animationName="fade-up" animationDuration="1s" animationDelay="0.2s">
            <Link to={slug}>
                <div className="lg:flex lg:gap-4 hover:-translate-y-1 hover:scale-105 duration-200">
                    {/* <img 
                        className="object-cover lg:w-1/2 rounded-md border border-solid border-black dark:border-white"
                        src={featuredImage?.node.sourceUrl} alt={featuredImage?.node.altText} 
                    /> */}
                    <GatsbyImage image={image} alt={featuredImage?.node.altText} className="object-cover lg:w-1/2 rounded-md border border-solid border-black dark:border-white" />
                    <div className="lg:py-8 lg:w-1/2">
                        <Typography variant="h2" bold>{title}</Typography>
                        <div className="flex flex-wrap gap-2 lg:my-4 my-2">
                            {
                                technologies.nodes.map(tech => {
                                    return (
                                        <Tag key={tech.name} colorScheme="teal">{tech.name}</Tag>
                                    )
                                })
                            }
                        </div>
                        <Link className="font-bold hover:underline" to={slug}>Read more &#8594;</Link>
                    </div>
                </div>
            </Link>
        </AnimateOnScroll>
    )
}

export const Head: HeadFC = () => {

    return (
        <>
            <html lang="en" />
            <title>Muhammad Hariz | Projects</title>
        </>
    )
}

export const pageQuery = graphql`
  query {
    projects: allWpProject(sort: {date: DESC}) {
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
`