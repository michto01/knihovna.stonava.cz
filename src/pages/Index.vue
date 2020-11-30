<template>
  <Layout>

    <ul>
      <li v-for="edge in $page.projects.edges" :key="edge.node.id">
        {{ edge.node.title }}
      </li>
    </ul>

  
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1 class="font-bold text-gray-900 dark:text-white font-lg">Hello, world!</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Pariatur excepturi labore tempore expedita, et iste tenetur
      suscipit explicabo! Dolores, aperiam non officia eos quod asperiores.
    </p>

    <h1 class="text-2xl font-semibold">Přihlášení do knihovny</h1>
    <p>Prosím vyplňte své přihlašovací údaje do katalogu </p>
    <PatronLogin-Dawinci />
    <!--opac-new-records-external /-->

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
  </Layout>
</template>

<page-query>
query {
  projects: allProject {
   {
      node {
        id
        name
        locale
        slogan
        image
        path
      }
    }
  }
}
</page-query>

<script>
import OpacNewRecordsExternal from '../components/OpacNewRecordsExternal.vue'
import PatronLoginDawinci from '../components/PatronLoginDawinci.vue'

export default {
  components: {
    PatronLoginDawinci,
    OpacNewRecordsExternal,
  },
   metaInfo() {
    const title = 'Knihovna Stonava';
    const description = 'Půjčování knih, periodik, pořádání kulturních akcí.';
    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ]
    }
  }
}
</script>
