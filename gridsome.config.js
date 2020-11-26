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
    // {
    //   use: '@gridsome/plugin-sitemap',
    //   options: {
    //     exclude: ['/to-exclude', '/es/*']
    //   }
    // },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [
          // Languages follow the spec: language{2}-COUNTRY{2}
          'cs-CZ',
          'pl-CZ'
        ],
        pathAliases: {
          'cs-CZ': 'cs',
          'pl-CZ': 'pl'
        },
        fallbackLocale: 'cs-CZ',
        defaultLocale: 'cs-CZ',
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: false, // default: true
        messages: /*process.env.NODE_ENV === 'production' &&*/ {
          'cs-CZ': require('./src/locales/cs.json'),
          'pl-CZ': require('./src/locales/pl.json'),
        },
      } 
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/**/*.md',
        typeName: 'SinglePage',
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}
