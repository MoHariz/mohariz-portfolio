import * as React from 'react';
import PageWrapper from '@components/PageWrapper';
import { HeadFC, graphql } from 'gatsby';
import Hero from '@components/Hero';
import SkillSets, { SkillSetNodeProps } from '@components/SkillSets/index';
import Experiences, { ExperienceNodeProps } from '@components/Experiences/index';
import Education from '@components/Education';
import AboutMe, { AboutMeProps } from '@components/AboutMe';
import Seo from '@components/Seo';

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
        justifyContent: 'center'
      }}
      addProgressBar
    >
      <>
        <Hero />
        <SkillSets skillSets={data.skillSets.nodes} />
        <Experiences experiences={data.experiences.nodes} />
        <Education />
        <AboutMe featuredImage={data.aboutMe.featuredImage} content={data.aboutMe.content} />
      </>
    </PageWrapper>
  );
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Muhammad Hariz',
  url: 'https://mohariz.me',
  sameAs: [process.env.GATSBY_LINKEDIN_URL, process.env.GATSBY_GITHUB_LINK].filter(Boolean)
};

export const Head: HeadFC = ({ location }) => {
  return (
    <Seo pathname={location.pathname} type='profile'>
      <script type='application/ld+json'>{JSON.stringify(personSchema)}</script>
    </Seo>
  );
};

export const homePageQuery = graphql`
  query {
    skillSets: allWpSkillSet(sort: { skillSetDetail: { orderIndex: ASC } }) {
      nodes {
        title
        skills {
          nodes {
            name
          }
        }
      }
    }
    experiences: allWpExperience(sort: { experienceDetail: { orderIndex: ASC } }) {
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
    aboutMe: wpPage(id: { eq: "cG9zdDoyMDg=" }) {
      featuredImage {
        node {
          altText
          gatsbyImage(width: 220, height: 220, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      content
    }
  }
`;
