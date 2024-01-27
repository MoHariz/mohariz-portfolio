import * as React from "react"
import PageWrapper from "../components/PageWrapper"
import { HeadFC } from "gatsby";
import Hero from "../components/Hero";

const IndexPage: React.FC = () => {
  return (
    <PageWrapper>
      <>
        <Hero />
      </>
    </PageWrapper>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Muhammad Hariz | Home Page</title>
