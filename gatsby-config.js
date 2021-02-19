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
      resolve: `gatsby-plugin-google-fonts-with-attributes`,
      options: {
        fonts: [
 
          `Quicksand\:300,400,500,600,700` ,

        ],
        display: 'swap',
        attributes: {
          rel: "stylesheet preload prefetch",
        },
      }
    },
        // Add after these plugins if used
        { 
          resolve: `gatsby-plugin-purgecss`,
          options: {
            printRejected: true, // Print removed selectors and processed file names
             develop: true, 
            // tailwind: true, // Enable tailwindcss support
            // whitelist: ['whitelist'], // Don't remove this selector
            // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
            // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
          }
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
