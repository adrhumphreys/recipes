import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "./layout";
import Ingredient from "./ingredient";
import Step from "./step";
import IngredientGroup from "./ingredient-group";

const shortcodes = { Link };

export default function PageTemplate({ data: { mdx } }) {
  const {
    frontmatter: { title, tags, servings, ingredients, ingredientGroups, steps }
  } = mdx;

  return (
    <Layout>
      <h1
        style={{
          fontFamily: "Merriweather-Black",
          fontSize: "50px",
          color: "#393E46",
          letterSpacing: 0,
          textAlign: "center",
          lineHeight: "56px",
          margin: "25px 20px 10px"
        }}
      >
        {title}
      </h1>
      <p>
        {tags.map(tag => (
          <span key={tag}>{tag} // </span>
        ))}
        <strong>{servings} servings</strong>
      </p>
      <div>
        <div>
          {ingredients &&
            ingredients.map((ingredient, pos) => (
              <Ingredient {...ingredient} key={pos} />
            ))}
          {ingredientGroups &&
            ingredientGroups.map((ingredientGroup, pos) => (
              <IngredientGroup {...ingredientGroup} key={pos} />
            ))}
        </div>
        <div>
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
          }
        }
      }
    }
  }
`;
