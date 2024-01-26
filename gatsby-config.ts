import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `mohariz.me`,
    siteUrl: `https://mohariz.me`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
  "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-plugin-postcss", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "mohariz.me",
      short_name: "mohariz.me",
      start_url: "/",
      background_color: "#ffffff",
      theme_color: "##ffffff",
      // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
      // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
      display: "standalone",
      icon: "src/images/smile.png", // This path is relative to the root of the site.
      // An optional attribute which provides support for CORS check.
      // If you do not provide a crossOrigin option, it will skip CORS for manifest.
      // Any invalid keyword or empty string defaults to `anonymous`
      crossOrigin: `use-credentials`,
    },
  },
  {
    resolve: 'gatsby-source-wordpress',
    options: {
      url: "https://test-mohariz.pantheonsite.io/graphql",
    }
  },
  // "gatsby-plugin-google-gtag"
]
};

export default config;
