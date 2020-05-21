import React from "react";

export default ({ ingredient, context }) => (
  <div>
    <p>
      {ingredient} <span>{context}</span>
    </p>
  </div>
);
