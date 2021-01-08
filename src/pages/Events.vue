<template>
  <Layout>
    <div class="bg-coal-100">
      <div class="container p-8 mx-auto md:p-16 sm:p-24 lg:px-36 lg:py-16">
        <div class="flex flex-col space-y-2">
          <div v-for="(edge, index) in eventsInCurrentLocale" :key="index">
            <EventCard
              :title="edge.node.title[0].text"
              :abstract="edge.node.short"
              :link="event_link(edge.node.meta.lang, edge.node.meta.uid)"
              :date="edge.node.created" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query Events {
    prismicio {
      events: allEvents(sortBy: created_DESC) {
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
//import day from 'dayjs';
import EventCard from '@/components/EventCard';

import { RichText } from 'prismic-dom';
import { eventLink } from '@/mixins/eventLink';

export default {
  components: {
    EventCard
  },
  data() {
    return {
    }
  },
  created () {
  },
  computed: {
    eventsInCurrentLocale () {
      const currentLocale = this.$i18n.locale.toString().toLowerCase();
      return this.$page.prismicio.events.edges.filter(e => {
          return e.node.meta.lang == currentLocale
      });
    }
  },
  methods: {
    event_link (lang, uid) {
      return eventLink(lang, uid);
    }
  }
}
</script>

<style>

</style>