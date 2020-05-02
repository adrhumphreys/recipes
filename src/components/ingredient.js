import React from "react"

export default ({ ingredient, context }) => (
  <div className="ingredient">
    <p>
      {ingredient} <span>{context}</span>
    </p>
  </div>
)
