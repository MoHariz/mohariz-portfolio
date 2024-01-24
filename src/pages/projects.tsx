import React from "react";
import PageWrapper from "../components/PageWrapper";
import { HeadFC } from "gatsby";
import Typography from "../components/Typography";

const ProjectsPage: React.FC = () => {
    return (
        <PageWrapper hideFooter>
            <>
                <Typography variant="h1">Projects</Typography>
                <Typography variant="p">Coming Soon</Typography>
            </>
        </PageWrapper>
    )
}

export default ProjectsPage

export const Head: HeadFC = () => <title>Muhammad Hariz | Projects</title>