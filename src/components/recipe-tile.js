import React from "react";
import { Link } from "gatsby";

const RecipeTile = ({ title, slug }) => (
  <p>
    <Link to={`/${slug}`}>{title}</Link>
  </p>
);

export default RecipeTile;
