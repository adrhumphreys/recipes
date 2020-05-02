/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

exports.createPages = async ({graphql, actions, reporter}) => {
  // Destructure the createPage function from the actions object
  const {createPage} = actions

  const recipeTemplate = path.resolve(`./src/components/recipe-page-layout.js`);
  const tagTemplate = path.resolve(`./src/components/tag-page-layout.js`);

  const result = await graphql(`
    {
      recipesGroup: allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
      tagsGroup: allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create recipe pages.
  const recipes = result.data.recipesGroup.edges

  // you'll call `createPage` for each result
  recipes.forEach(({node}, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: `${node.frontmatter.slug}`,
      // This component will wrap our MDX content
      component: recipeTemplate,
      // You can use the values in this context in
      // our page layout component
      context: {id: node.id},
    })
  })

  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue.toLowerCase()}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
