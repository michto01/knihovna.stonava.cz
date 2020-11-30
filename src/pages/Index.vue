<template>
  <Layout>
    <div>
      <article class="flex flex-col w-full">
        <section class="p-2 bg-gray-200 md:p-16 sm:p-24 lg:p-36">
            <h1 class="text-2xl font-bold">Ze života knihovny</h1>
            <div class="flex flex-col gap-4 px-4 lg:flex-row lg:p-10 lg:gap-8">
              <main class="md:flex-grow lg:max-w-2/3">
              <div class="relative">
                <ul class="flex flex-col justify-center gap-4 sm:flex-row">
                  <li v-for="edge in $static.projects.edges" :key="edge.node.id" class="relative items-center flex-grow block w-full p-4 overflow-hidden bg-white rounded-t-lg shadow-lg md:w-2/5 rounded-2xl" style="min-height: 19rem;">
                    <div class="absolute inset-0 w-full h-full bg-red-200 rounded">
                      <g-image :src="edge.node.image" class="fit-cover" width="5rem" height="5rem" aria-hidden="true" alt></g-image>
                    </div>
                    <div class="absolute inset-0 flex flex-col justify-end w-full p-4 bg-gradient-to-b from-transparent to-indigo-500">
                      <h2 class='text-xl font-extrabold text-coal-50'>{{ edge.node.name }}</h2>
                      <div>{{ edge.node.path }}</div>
                    </div>
                  </li>
                </ul>
                <button class="absolute top-0 left-0 w-12 h-12 mt-32 -ml-6 text-2xl text-indigo-600 bg-white rounded-full shadow-md hover:text-indigo-400 focus:text-indigo-400 focus:outline-none focus:shadow-outline">
                  <span class="block" style="transform: scale(-1);">&#x279c;</span>
                </button>
                <button class="absolute top-0 right-0 w-12 h-12 mt-32 -mr-6 text-2xl text-indigo-600 bg-white rounded-full shadow-md hover:text-indigo-400 focus:text-indigo-400 focus:outline-none focus:shadow-outline">
                  <span class="block" style="transform: scale(1);">&#x279c;</span>
                </button>
              </div>
              </main>
              <aside class="p-4 bg-indigo-100 rounded-lg shadow-lg md:min-w-2/5">
                <g-image alt="Example image" src="~/favicon.png" width="135" />

                <h1 class="text-2xl font-semibold">Přihlášení do knihovny</h1>
                <p>Prosím vyplňte své přihlašovací údaje do katalogu </p>
                <PatronLogin-Dawinci />

                <div>
                  <h3 class="text-xl font-bold text-indigo-900">Otevírací hodiny</h3>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-indigo-900">Otevírací hodiny</h3>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-indigo-900">Užitečné odkazy</h3>
                  <p class="home-links">
                    <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
                    <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
                  </p>
                </div>
              </aside>
            </div>
        </section>
        <section id="news" class="py-4">
          <h1 class="pb-4 text-2xl font-bold text-center">Vyvěska</h1>
          <div>
            <ul class="flex flex-col justify-center w-full gap-4 sm:flex-row">
              <li v-for="edge in $static.projects.edges" :key="edge.node.id" class="block p-4 rounded shadow-sm bg-coal-50">
                <h2 class='font-extrabold text-md'>{{ edge.node.name }}</h2>
                <div>{{ edge.node.path }}</div>
              </li>
            </ul>
          </div>
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
