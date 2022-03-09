import { useStaticQuery, graphql } from 'gatsby';

import React from 'react';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      siteBuildMetadata {
        buildTime
      }
    }
  `);

  return (
    <header>
      <h1>{data.site.siteMetadata.title}</h1>
    </header>
  );
};

export default Header;
