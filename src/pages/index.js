import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import RecipeTile from "../components/recipe-tile";

const IndexPage = () => {
  const {
    recipesGroup: { edges: recipes }
  } = useStaticQuery(
    graphql`
      query {
        recipesGroup: allMdx {
          edges {
            node {
              frontmatter {
                slug
                title
              }
            }
          }
        }
      }
    `
  );

  const recipeList = recipes.map(
    ({
      node: {
        frontmatter: { title, slug }
      }
    }) => <RecipeTile title={title} slug={slug} key={slug} />
  );

  return (
    <Layout>
      <SEO title="Recipes" />
      <h1>Hi people</h1>
      {recipeList}
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
