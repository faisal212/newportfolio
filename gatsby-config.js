module.exports = {
  siteMetadata: {
    title: "Volatile Commerce",
    description: "Get Fastest Ecommerce Web App in the world the with Volatile Commerce"
  },
  plugins: [
    "gatsby-plugin-sharp",


    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-offline",

  ],
};
