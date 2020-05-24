import React from "react";
import Ingredient from "./ingredient";

export default ({ groupTitle, groupContext, ingredients }) => (
  <div className="ingredientGroup">
    <p className="ingredientGroupTitle">
      {groupTitle} {groupContext && <span>{groupContext}</span>}
    </p>
    {ingredients &&
      ingredients.map((ingredient, pos) => (
        <Ingredient {...ingredient} key={pos} />
      ))}
  </div>
);
