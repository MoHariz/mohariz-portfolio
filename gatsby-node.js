const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;

    const projectPageTemplate = path.resolve(`src/components/ProjectPageTemplate/index.tsx`);

    const result = await graphql(`
        {
            projects: allWpProject {
                nodes {
                    id
                    slug
                }
            }
        }
    `)

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.projects.nodes.forEach(project => {
        createPage({
            path: `/projects/${project.slug}/`,
            component: projectPageTemplate,
            context: {
                ProjectId: project.id
            }
        })
    })
};