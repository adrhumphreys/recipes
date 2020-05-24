import React from "react";
import { graphql } from "gatsby";
import Layout from "./layout";
import Ingredient from "./ingredient";
import Step from "./step";
import IngredientGroup from "./ingredient-group";
import SEO from "./seo";

export default function PageTemplate({ data: { mdx } }) {
  const {
    frontmatter: { title, tags, servings, ingredients, ingredientGroups, steps }
  } = mdx;

  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <p className="subtitle">
        {tags.map(tag => (
          <span key={tag}>{tag} // </span>
        ))}
        <strong>{servings} servings</strong>
      </p>
      <div className="recipe-contents">
        <div className="ingredients">
          {ingredients &&
            ingredients.map((ingredient, pos) => (
              <Ingredient {...ingredient} key={pos} />
            ))}
          {ingredientGroups &&
            ingredientGroups.map((ingredientGroup, pos) => (
              <IngredientGroup {...ingredientGroup} key={pos} />
            ))}
        </div>
        <div className="steps">
          {steps.map((s, pos) => (
            <Step {...s} key={pos} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query RecipeQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        tags
        servings
        ingredients {
          ingredient
          context
          link
        }
        steps {
          step
          title
        }
        ingredientGroups {
          groupTitle
          groupContext
          ingredients {
            ingredient
            context
            link
          }
        }
      }
    }
  }
`;
