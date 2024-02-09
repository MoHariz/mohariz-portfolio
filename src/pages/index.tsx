import * as React from "react"
import PageWrapper from "../components/PageWrapper"
import { HeadFC } from "gatsby";
import Hero from "../components/Hero";

const IndexPage: React.FC = () => {
  return (
    <PageWrapper 
      hideFooter 
      pageStyles={{
        minHeight: 'calc(100vh - 57px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <>
        <Hero />
      </>
    </PageWrapper>
  )
}

export default IndexPage

export const Head: HeadFC = () => {
  return (
    <>
      <html lang="en" />
      <title>Muhammad Hariz | Home Page</title>
      <meta name="description" content="Muhammad Hariz - Full Stack Software Engineer with interests in front-end development, software infrastructure, and data analytics." />
    </>
  )
}
