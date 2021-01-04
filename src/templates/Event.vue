<template>
  <Layout>
    <div class="w-full bg-coal-100 dark:bg-coal-800">
        <article class="" aria-labelledby="article-title p-8">
          <div class="flex flex-col justify-center md:flex-row">
            <div>
              <div class="max-w-4xl p-2 mt-8 prose bg-white shadow-sm dark:bg-coal-700 dark:prose-dark lg:prose-lg md:p-16 sm:p-24 lg:px-36 lg:py-16">
                <div>
                  <button @click.prevent="$router.back()">&larr; Zpět</button>
                  <br />
                  <div class="flex flex-row h-full space-x-2 align-middle">
                    <div v-for="i in 3" :key="i">
                      <div class="inline px-3 py-1 font-semibold text-white bg-green-700 rounded-lg sr-hidden">Event</div>
                    </div>
                  </div>
                </div>
                <div v-html="asHtml($page.prismicio.event.title)" />
                <div v-html="asHtml($page.prismicio.event.body)" />
              </div>
              <footer class="p-4">
                  <!--p>Editor: </p-->
                  <!--p>Vytvořeno: <time :datetime="$page.info.createdAt">{{ dateCreated }}</time></p-->
                  <p>Poslední aktualizace: <time :datetime="$page.prismicio.event.meta.lastPublicationDate">{{ $page.prismicio.event.meta.lastPublicationDate }}</time></p>
              </footer>
            </div>
          </div>
        </article>
    </div>
  </Layout>
</template>

<page-query>
query SingleEvent($uid: String!, $lang: String!) {
  prismicio {
    event(uid: $uid, lang: $lang) {
      title
      short
      created
      body
      meta: _meta {
        uid
        lang
        lastPublicationDate
        alternateLanguages {
          uid
          lang
        }
      }
    }
  }
}
</page-query>

<script>
//import day from 'dayjs';
import {RichText} from 'prismic-dom';

export default {
  created () {
    // Switch locale based on the incoming query language
    var locale = this.$context.lang.split('-')
    this.$i18n.locale = `${locale[0]}-${locale[1].toUpperCase()}`
  },
  computed: {
  },
  methods: {
    asHtml (value) {
      return RichText.asHtml(value);
    }
  }
}
</script>
<!--style>
</style-->