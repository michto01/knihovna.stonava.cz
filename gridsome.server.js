// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const fs = require('fs');
const yaml = require('js-yaml');


const fileContents = fs.readFileSync('./src/data/library.yaml', 'utf8');
const stats = yaml.load(fileContents);
// console.log(JSON.stringify(stats, null, 2))

module.exports = (api) => {
  api.loadSource(async actions => {
    const collection = actions.addCollection({
      typeName: 'Statistics'
    })

    for (const stat of stats.library) {
      collection.addNode(stat);
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      prismicio {
        events: allEvents {
          edges {
            node {
              title
              short
              meta: _meta {
                lang
                uid
                lastPublicationDate
              }
              created
            }
          }
        }
      }
    }`)

    const eventsPathPrefix = require('./src/mixins/eventLink').eventLink
    data.prismicio.events.edges.forEach(({ node }) => {
      createPage({
        path: `${ eventsPathPrefix(node.meta.lang, node.meta.uid) }`,
        component: './src/templates/Event.vue',
        context: {
          uid: node.meta.uid,
          lang: node.meta.lang
        }
      })
    })
  })

};
