import React from "react";
import { Link } from "gatsby";

const RecipeTile = ({ title, slug, image }) => {
  return (
    <Link
      to={`/${slug}`}
      className="recipe-tile"
      style={{
        backgroundImage: `url(${image})`
      }}
    >
      {image && <img src={image} alt={title} />}
      <p>{title}</p>
    </Link>
  );
};

export default RecipeTile;
