import type { GatsbyConfig } from "gatsby";
import dotenv from 'dotenv';

dotenv.config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Resume`,
    siteUrl: `https://www.atanastalos.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  pathPrefix: "/resume",
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.ACCESS_TOKEN,
      "spaceId": process.env.SPACE_ID
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-sass"]
};

export default config;
