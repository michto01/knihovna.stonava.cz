<template>
  <div>
      <div v-for="(edge, index) in $page.prismicio.events" :key="index">
         {{edge.node.title}}
      </div>
  </div>
</template>

<page-query>
  query Events {
    prismicio {
      events: allEvents(sortBy: meta_lastPublicationDate_DESC, first: 4) {
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
  }
</page-query>

<script>
export default {

}
</script>

<style>

</style>