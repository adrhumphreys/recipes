import React from "react";
import { Link } from "gatsby";

const RecipeTile = ({ title, slug }) => (
  <Link to={`/${slug}`} className="recipe-tile">
    <p>{title}</p>
  </Link>
);

export default RecipeTile;
