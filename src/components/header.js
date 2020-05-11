import { Link, useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

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

  return (
    <header>
      <div className="header">
        <Link className="link" to="/">
          All recipes
        </Link>
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
