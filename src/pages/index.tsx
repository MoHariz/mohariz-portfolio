import * as React from "react"
import PageWrapper from "../components/PageWrapper"
import { HeadFC, graphql } from "gatsby";
import Hero from "../components/Hero";
import SkillSets, { SkillSetNodeProps } from "../components/SkillSets/index";


type HomePageProps = {
  data: {
    skillSets: {
      nodes: SkillSetNodeProps[];
    };
  };
};


export default function IndexPage({ data }: HomePageProps) {
  return (
    <PageWrapper 
      pageStyles={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <>
        <Hero />
        <SkillSets skillSets={data.skillSets.nodes} />
      </>
    </PageWrapper>
  )
}

export const Head: HeadFC = () => {
  return (
    <>
      <html lang="en" />
      <title>Muhammad Hariz | Home Page</title>
      <meta name="description" content="Muhammad Hariz - Full Stack Software Engineer with interests in front-end development, software infrastructure, and data analytics." />
    </>
  )
}

export const homePageQuery = graphql`
  query {
    skillSets: allWpSkillSet(sort: {orderIndex: {orderIndex: ASC}}) {
      nodes {
        title
        skills {
          nodes {
            name
          }
        }
      }
    }
  }
`
