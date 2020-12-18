<template>
  <Layout>
    <div>
      <article class="flex flex-col w-full">
        <section class="py-2 bg-gray-200 md:p-16 sm:p-24 lg:p-36 lg:pt-16">
            <h1 class="text-4xl font-bold">Ze života knihovny</h1>
            <div class="flex flex-col gap-4 px-4 lg:flex-row lg:p-10 lg:gap-8">
              <main class="md:flex-grow lg:max-w-2/3">
              <h2 class="pb-2 text-2xl font-semibold text-indigo-900">Blog</h2>
              <!-- Blog carousel -->
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
              <!-- Top news carousel -->
              <h2 class="py-4 text-2xl font-semibold text-indigo-900">Události</h2>
              <div>
                  <ul class="flex flex-col justify-center w-full gap-2">
                    <li v-for="edge in $page.prismicio.events.edges" :key="edge.node.id" class="block p-4 rounded shadow-sm bg-coal-50">
                      <h2 class='font-extrabold text-md'>{{ edge.node.title[0].text }}</h2>
                      <div>{{ edge.node.short }}</div>
                    </li>
                  </ul>
                </div>
              <div>
              </div>
              </main>
              <aside id="library-quick-access" class="flex flex-col gap-4 ">
                <div class="p-4 bg-indigo-100 rounded-lg shadow-lg">
                  <h1 class="text-2xl font-bold text-indigo-900">Knihovna Stonava</h1>
                  <p></p>
                  <div>
                    <h3 class="text-base font-bold text-indigo-900">Otevírací hodiny</h3>
                    <div class="px-4">
                      <p>Pondělí: <span>9.30-11.00</span>, <span>12.00-18.00</span></p>
                      <p>Čtvrtek: <span>12.00-18</span></p>
                    </div>
                  </div>
                  <!--p class="text-navy-800">Prosím vyplňte své přihlašovací údaje do katalogu </p-->
                  <div>
                    <h3 class="text-base font-bold text-indigo-900">Otevírací hodiny</h3>
                  </div>
                  <div>
                    <h3 class="text-base font-bold text-indigo-900">Užitečné odkazy</h3>
                    <ul class="px-4 home-links">
                      <li><a href="//gridsome.org/docs/" target="_blank" rel="noopener noreferrer">Gridsome Docs</a></li>
                      <li><a href="//github.com/gridsome/gridsome" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                      <li><a href="//sknizkoudozivota.cz" target="_blank" rel="noopener noreferrer">S knížkou do života</a></li>
                      <li><a href="//stonava.cz" target="_blank" rel="noopener noreferrer">Obec Stonava</a></li>
                      <li><a href="//rkka.cz" target="_blank" rel="noopener noreferrer">Regionální knihovna Karviná</a></li>
                    </ul>
                  </div>
                </div>
                <PatronLogin-Dawinci class="w-2/3 shadow-lg" />
              </aside>
            </div>
        </section>
        <section id="news" class="py-4">
          <h1 class="pb-4 text-2xl font-bold text-center">Vyvěska</h1>
          <div>
            <ul class="flex flex-col justify-center w-full gap-4 sm:flex-row">
              <li v-for="edge in $static.projects.edges" :key="edge.node.title" class="block p-4 rounded shadow-sm bg-coal-50">
                <h2 class='font-extrabold text-md'>{{ edge.node.title }}</h2>
                <div>{{ edge.node.short }}</div>
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

<page-query>
query Events {
  prismicio {
    events: allEvents(sortBy: meta_lastPublicationDate_DESC, first: 2) {
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

<style scoped>

.home-links {
  @apply text-indigo-700;
}
.home-links a {
    @apply underline;
}
.home-links a::after {
    @apply underline;
    width: 1rem;
    height: 1rem;
    display: inline-block;
    content: url("data:image/svg+xml,%3Csvg fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'%3E%3C/path%3E%3Cpath d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'%3E%3C/path%3E%3C/svg%3E")
}
</style>

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
  created() {
    console.log(this.$page.prismicio.events.edges)
  },
  data() {
    return {
      locale: 'cs-cz'
    }
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
