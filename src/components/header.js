import { Link, useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

const Header = ({ siteTitle }) => {
  const {
    tags: { group: tags }
  } = useStaticQuery(
    graphql`
      {
        tags: allMdx {
          group(field: frontmatter___tags) {
            tag: fieldValue
          }
        }
      }
    `
  );

  const [opened, setOpened] = useState(false);

  const headerClassNames = "header " + (opened ? "opened" : "closed");

  return (
    <header>
      <div className={headerClassNames}>
        <Link className="link" to="/">
          All recipes
        </Link>
        <div className="menu-button-container">
          <button className="menu-button" onClick={() => setOpened(!opened)}>{opened ? 'Hide menu' : 'Show menu'}</button>
        </div>
        {tags.map(tag => (
          <Link
            className="link"
            to={`/tags/${tag.tag.toLowerCase()}`}
            key={tag.tag}
          >
            {tag.tag}
          </Link>
        ))}
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
