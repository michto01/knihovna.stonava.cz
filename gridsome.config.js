require("dotenv").config();
const i18n_routes = require('./src/locales/routes');

module.exports = {
  siteName: 'Místní knihovna Stonava',
  siteUrl: 'http://localhost:8080',
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
    {
      use: 'gridsome-plugin-ogp'
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/pl/**'],
        output: '/cs/sitemap.xml',
        include: [
          '/cs/info', '/cs/info/**'
        ]
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/cs/**'],
        output: '/pl/sitemap.xml',
        include: [
          '/pl/info', '/pl/info/**'
        ]
      },
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        enablePathGeneration: false,
        rewriteDefaultLanguage: true, // default: true
        messages: /*process.env.NODE_ENV === 'production' &&*/ {
          'cs-CZ': require('./src/locales/cs'),
          'pl-CZ': require('./src/locales/pl'),
        },
        ...i18n_routes
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/*/info/**/*.md',
        typeName: 'Info',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/*/project/**/*.md',
        typeName: 'Project',
      }
    },
  ],
  transformers: {
    remark: {
      plugins: [
        'remark-slug',
        require('remark-gfm'),
      ],
      config: {
        gfm : true,
        footnotes: true
      }
    }
  },
  templates: {
    Info: [
      {
        path: '/:lang/info/:slug',
        component: './src/templates/InfoPage.vue'
      }
    ]
  }
}
