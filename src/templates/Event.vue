<template>
  <Layout>
    <div class="w-full bg-coal-100 dark:bg-coal-800">
        <article class="" aria-labelledby="article-title p-8">
          <div class="flex flex-col justify-center md:flex-row">
            <div>
              <div class="max-w-4xl p-2 mt-8 prose bg-white shadow-sm dark:bg-coal-700 dark:prose-dark lg:prose-lg md:p-16 sm:p-24 lg:px-36 lg:py-16">
                <div>
                  <div class="p-2 bg-green-700 rounded-lg sr-hidden">
                     Event
                  </div>
                </div>
                <div v-html="asHtml($page.prismicio.event.title)" />
                <div v-html="asHtml($page.prismicio.event.body)" />
              </div>
              <footer class="p-4">
                  <!--p>Editor: </p-->
                  <!--p>Vytvořeno: <time :datetime="$page.info.createdAt">{{ dateCreated }}</time></p-->
                  <p>Poslení aktualizace: <time :datetime="$page.prismicio.event.meta.lastPublicationDate">{{ $page.prismicio.event.meta.lastPublicationDate }}</time></p>
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