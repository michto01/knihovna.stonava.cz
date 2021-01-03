// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const fs = require('fs');
const yaml = require('js-yaml');

const fileContents = fs.readFileSync('./src/data/library.yaml', 'utf8');
const stats = yaml.safeLoad(fileContents);
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
};
