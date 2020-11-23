require("dotenv").config();

module.exports = {
  siteName: 'Místní knihovna Stonava',
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }
    },
    {
      use: "gridsome-source-graphql-prismic",
      options: {
        url: process.env.PRISMIC_API_URL,
        fieldName: 'prismicio',
        typeName: 'prismicio',

        headers: { 
          'Prismic-Ref': ``, // useMasterRef will overload this line
          'Authorization': `Token ${process.env.PRISMIC_TOKEN}`,
        },

        useMasterRef: true // undefined by default
      }
    },
    {
      use: 'gridsome-plugin-typescript',
    },
  ],
}
