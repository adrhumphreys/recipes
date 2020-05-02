import React from "react"

export default ({ title, step }) => (
  <div className="step">
    {title && <h2>{title}</h2>}
    <p>{step}</p>
  </div>
)
