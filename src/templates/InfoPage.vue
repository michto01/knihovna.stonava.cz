<template>
  <Layout>
    <div class="w-full">
        <article class="" aria-labelledby="article-title">
          <div class="flex flex-col md:flex-row">
            <aside v-if="$page.info.headings.length > 0" class="max-w-sm p-2 prose sm:p-6 lg:p-8">
              <h2>Na této stránce</h2>
              <ul>
                <li v-for="heading in $page.info.headings" :key="heading.value">
                  <a :href="heading.anchor">{{ heading.value }}</a>
                </li>
              </ul>
            </aside>
            <div>
              <div class="max-w-4xl px-2 prose lg:prose-lg sm:px-6 lg:px-8 lg:py-6">
                <h1 id="article-title" v-html="$page.info.title" />
                <div v-html="$page.info.content" />
              </div>
              <footer class="p-4">
                  <!--p>Editor: </p-->
                  <p>Vytvořeno: <time :datetime="$page.info.createdAt">{{ dateCreated }}</time></p>
                  <p>Poslední aktualizace: <time :datetime="$page.info.modified">{{ dateUpdated }}</time></p>
              </footer>
            </div>
          </div>
        </article>
    </div>
  </Layout>
</template>

<script>
import day from 'dayjs';

export default {
  computed: {
      dateCreated () {
        const time = this.$page.info.createdAt
        if (!time) return;
        return day(time).format('DD.MM.YYYY');
      },
      dateUpdated () {
        const time = this.$page.info.modified
        if (!time) return;
        return day(time).format('DD.MM.YYYY');
      }
  }
}
</script>

<page-query>
query ($id: ID!) {
  info(id: $id) {
    title
    content
    headings {
      depth
      value
      anchor
    }
    createdAt
    modified
  }
}
</page-query>

<!--style>
</style-->