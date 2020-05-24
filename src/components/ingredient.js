import React from "react";
import { Link } from "gatsby";

export default ({ ingredient, context, link }) => {
  if (link) {
  	return (
      <div>
        <p>
          <Link to={link}>{ingredient}</Link> <span>{context}</span>
        </p>
      </div>
    );
  }

  return (
    <div>
      <p>
        {ingredient} <span>{context}</span>
      </p>
    </div>
  );
}
