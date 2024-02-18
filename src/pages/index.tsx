import * as React from "react"
import PageWrapper from "../components/PageWrapper"
import { HeadFC, graphql } from "gatsby";
import Hero from "../components/Hero";
import SkillSets, { SkillSetNodeProps } from "../components/SkillSets/index";
import Experiences, { ExperienceNodeProps } from "../components/Experiences/index";
import Education from "../components/Education";
import AboutMe, { AboutMeProps } from "../components/AboutMe";


type HomePageProps = {
  data: {
    skillSets: {
      nodes: SkillSetNodeProps[];
    };
    experiences: {
      nodes: ExperienceNodeProps[];
    };
    aboutMe: AboutMeProps;
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
        <Experiences experiences={data.experiences.nodes} />
        <Education/>
        <AboutMe featuredImage={data.aboutMe.featuredImage} content={data.aboutMe.content} />
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
    skillSets: allWpSkillSet(sort: {skillSetDetail: {orderIndex: ASC}}) {
      nodes {
        title
        skills {
          nodes {
            name
          }
        }
      }
    }
    experiences: allWpExperience(sort: {experienceDetail: {orderIndex: ASC}}) {
      nodes {
        title
        experienceDetail {
          companyUrl
          companyLocation
          roleTitle
          startDate
          endDate
        }
        content
      }
    }
    aboutMe: wpPage(id: {eq: "cG9zdDoyMDg="}) {
      featuredImage {
        node {
          altText
          gatsbyImage(width: 400, height: 400, placeholder: BLURRED, formats: AUTO)
        }
      }
      content
    }
  }
`
