<template>
  <Layout>
    <div>
      <article class="flex flex-col gap-y-4">
        <section class="flex flex-col gap-4 p-4 md:flex-row lg:p-10 lg:gap-8">
          <main class="md:flex-grow lg:max-w-2/3">
            <h1 class="pb-4 text-2xl font-bold">Ze života knihovny</h1>
            <ul class="flex flex-col justify-center gap-4 h-100 sm:h-full sm:flex-row">
              <li v-for="edge in $static.projects.edges" :key="edge.node.id" class="relative flex-grow block p-4 overflow-hidden bg-white rounded shadow-sm min-h-xl">
                <div class="absolute inset-0 w-full h-full bg-red-200 rounded">
                  <g-image :src="edge.node.image" class="fit-cover" width="5em" height="5em" alt></g-image>
                </div>
                <div class="absolute inset-0 flex flex-col justify-end w-full h-full p-4 bg-gradient-to-b from-transparent to-indigo-500">
                  <h2 class='text-xl font-extrabold text-coal-50'>{{ edge.node.name }}</h2>
                  <div>{{ edge.node.path }}</div>
                </div>
              </li>
            </ul>
          </main>
          <aside class="md:min-w-1/3">
          <g-image alt="Example image" src="~/favicon.png" width="135" />

          
          <h1 class="text-2xl font-semibold">Přihlášení do knihovny</h1>
          <p>Prosím vyplňte své přihlašovací údaje do katalogu </p>
          <PatronLogin-Dawinci />
          <!--opac-new-records-external /-->

          <p class="home-links">
            <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
            <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
          </p>
        </aside>
        </section>
        <section id="news" class="py-4">
          <h1 class="pb-4 text-2xl font-bold text-center">Vyvěska</h1>
          <ul class="flex flex-col justify-center w-full gap-4 sm:flex-row">
            <li v-for="edge in $static.projects.edges" :key="edge.node.id" class="block p-4 rounded shadow-sm bg-coal-50">
              <h2 class='font-extrabold text-md'>{{ edge.node.name }}</h2>
              <div>{{ edge.node.path }}</div>
            </li>
          </ul>
        </section>
         <section id="library" class="py-4 bg-green-200">
          <h1 class="pb-4 text-2xl font-bold text-center">Knihovna Stonava</h1>
          <ul class="flex flex-col justify-center w-full gap-4 sm:flex-row">
            <li v-for="edge in $static.projects.edges" :key="edge.node.id" class="block p-4 bg-white rounded shadow-sm">
              <h2 class='font-extrabold text-md'>{{ edge.node.name }}</h2>
              <div>{{ edge.node.path }}</div>
            </li>
          </ul>
        </section>
        <section id="recomendations" class="py-4">
          <h1 class="pb-4 text-2xl font-bold text-center">Doporučujeme</h1>
          <ul class="flex flex-col justify-center w-full gap-4 sm:flex-row">
            <li v-for="edge in $static.projects.edges" :key="edge.node.id" class="block p-4 rounded shadow-sm bg-coal-50">
              <h2 class='font-extrabold text-md'>{{ edge.node.name }}</h2>
              <div>{{ edge.node.path }}</div>
            </li>
          </ul>
        </section>
        <section id="projects" class="py-4 bg-green-200">
          <h1 class="pb-4 text-2xl font-bold text-center">Projekty</h1>
          <ul class="flex flex-col justify-center w-full gap-4 sm:flex-row">
            <li v-for="edge in $static.projects.edges" :key="edge.node.id" class="block p-4 bg-white rounded shadow-sm">
              <div class="m-1 bg-red-200 rounded">
                <g-image :src="edge.node.image" width="5em" height="5em" alt></g-image>
              </div>
              <h2 class='font-extrabold text-md'>{{ edge.node.name }}</h2>
              <div>{{ edge.node.path }}</div>
            </li>
          </ul>
        </section>
        <section id="history" class="py-4">
          <h1 class="pb-4 text-2xl font-bold text-center">Historie</h1>
          <ul class="flex flex-col justify-center w-full gap-4 sm:flex-row">
            <li v-for="edge in $static.projects.edges" :key="edge.node.id" class="block w-1/4 p-4 rounded shadow-sm bg-coal-50">
              <h2 class='font-extrabold text-md'>{{ edge.node.name }}</h2>
              <div>{{ edge.node.path }}</div>
            </li>
          </ul>
        </section>
      </article>
    </div>
  </Layout>
</template>

<static-query>
query {
  projects : allProject {
    edges {
      node {
        id
        locale
        slogan
        image
        path
        name
      }
    }
  }
}
</static-query>

<script>
import OpacNewRecordsExternal from '../components/OpacNewRecordsExternal.vue'
import PatronLoginDawinci from '../components/PatronLoginDawinci.vue'
import About from './About.vue'

export default {
  components: {
    PatronLoginDawinci,
    OpacNewRecordsExternal,
    About,
  },
  mounted() {
    console.log(this.$page)
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
