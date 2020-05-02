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

  const linkStyle = {
    fontFamily: "'IBM Plex Mono', monospace",
    fontWeight: 500,
    color: "#424141",
    textDecoration: "none",
    fontSize: "18px"
  };

  return (
    <header
      style={{
        borderBottom: "2px solid #393E46"
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "1.45rem 1.0875rem",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Link style={{ ...linkStyle, fontWeight: 700 }} to="/">
          All recipes
        </Link>
        {tags.map(tag => (
          <Link
            style={linkStyle}
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
