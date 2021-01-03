<template>
  <Layout>
    <div>
      <article class="flex flex-col w-full">
        <!-- MAIN section -->
        <section class="py-2 bg-gray-200 md:p-16 sm:p-24 lg:p-36 lg:pt-16">
            <h1 class="text-4xl font-black text-center sm:text-left">Ze života knihovny</h1>
            <div class="flex flex-col px-4 space-y-4 lg:flex-row lg:p-10 lg:space-x-8 lg:space-y-8">
              <main class="flex-grow">
                <h2 class="pb-2 text-2xl font-extrabold text-indigo-900">Blog</h2>
                <!-- Blog carousel -->
                <div class="relative">
                  <div class="flex flex-col justify-center space-x-4 sm:flex-row">
                    <div v-for="edge in $static.projects.edges" :key="edge.node.id" class="relative items-center flex-grow block w-full p-4 overflow-hidden bg-white rounded-t-lg shadow-lg md:w-2/5 rounded-2xl" style="min-height: 19rem;">
                      <div class="absolute inset-0 w-full h-full bg-red-200 rounded">
                        <g-image :src="edge.node.image" class="fit-cover" width="5rem" height="5rem" aria-hidden="true" alt></g-image>
                      </div>
                      <div class="absolute inset-0 flex flex-col justify-end w-full p-4 bg-gradient-to-b from-transparent to-indigo-500">
                        <h2 class='text-xl font-extrabold text-coal-50'>{{ edge.node.name }}</h2>
                        <div>{{ edge.node.path }}</div>
                      </div>
                    </div>
                  </div>
                  <button class="absolute top-0 left-0 w-12 h-12 mt-32 -ml-6 text-2xl text-indigo-600 bg-white rounded-full shadow-md hover:text-indigo-400 focus:text-indigo-400 focus:outline-none focus:shadow-outline">
                    <span class="block" style="transform: scale(-1);">&#x279c;</span>
                  </button>
                  <button class="absolute top-0 right-0 w-12 h-12 mt-32 -mr-6 text-2xl text-indigo-600 bg-white rounded-full shadow-md hover:text-indigo-400 focus:text-indigo-400 focus:outline-none focus:shadow-outline">
                    <span class="block" style="transform: scale(1);">&#x279c;</span>
                  </button>
                </div>
                <!-- Top news carousel -->
                <h2 class="py-4 text-2xl font-extrabold text-indigo-900">Události</h2>
                <div>
                  <div class="flex flex-col justify-center w-full space-y-2">
                    <div v-for="edge in $page.prismicio.events.edges" :key="edge.node.id" class="flex flex-row p-4 space-x-2 rounded shadow-sm bg-coal-50">
                      <span class="flex h-full p-2 m-2 my-auto bg-indigo-800 rounded-lg">
                          <!-- Heroicon name: speakerphone -->
                          <svg role="img" width="1em" height="1em" class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                          </svg>
                      </span>
                      <div>
                        <h3 class='text-xl font-extrabold'>{{ edge.node.title[0].text }}</h3>
                        <p class='text-md'>{{ edge.node.short }}</p>
                        <div class="flex flex-row">
                          <span class="flex-grow block"></span>
                          <a class="p-2 font-extrabold text-right bg-indigo-500 rounded text-indigo-50" href="#">čti více</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <aside id="library-quick-access" class="flex flex-col space-y-4">
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
        <!-- NEWS section -->
        <section id="news" class="py-4">
          <h1 class="pb-4 text-2xl font-bold text-center">Vyvěska</h1>
          <div>
            <ul class="flex flex-col justify-center w-full space-y-2 sm:space-x-4 sm:space-y-0 sm:flex-row">
              <li v-for="edge in $static.projects.edges" :key="edge.node.title" class="block p-4 rounded shadow-sm bg-coal-50">
                <h2 class='font-extrabold text-md'>{{ edge.node.title }}</h2>
                <div>{{ edge.node.short }}</div>
              </li>
            </ul>
          </div>
        </section>
        <!-- LIBRARY section -->
         <section id="library" class="py-4 bg-green-200 bg-paralex-library">
          <h1 class="text-2xl font-extrabold text-center text-indigo-800">Knihovna</h1>
          <h2 class="pb-4 text-sm font-semibold text-center text-indigo-50">Přehled zajímavých čísel z místní knihovny</h2>
          <div class="flex flex-col flex-wrap justify-center p-2 space-y-2 sm:flex-nowrap sm:space-y-0 sm:space-x-2 sm: lg:space-x-8 sm:flex-row">
            <div v-for="edge in $page.statistics.edges" :key="edge.node.model" class="flex flex-row p-4 duration-150 ease-in-out transform bg-white border rounded shadow-sm h-max sm:flex-col hover:-translate-y-2 hover:shadow-md">
              <g-image :src="assets_image(edge.node.model)" alt="" aria-hidden="true" width="5rem" height="5rem" class="sm:mx-auto h-36 w-36"/>
              <div class="p-4 text-center">
                <p v-for="val in edge.node.values" :key="val.id" >
                  <span>{{ val.value }}&nbsp;</span>
                  <span>{{ val.label[$i18n.locale.split('-')[0]] }}</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <!-- RECOMENDATION section -->
        <section id="recomendations" class="py-4">
          <h1 class="pb-4 text-2xl font-bold text-center shadow-sm">Doporučujeme</h1>
          <ul class="flex flex-col justify-center w-full space-y-2 sm:space-x-4 sm:space-y-0 sm:flex-row">
            <li v-for="edge in $static.projects.edges" :key="edge.node.model" class="block p-4 rounded shadow-sm bg-coal-50">
              <h2 class='font-extrabold text-md'>{{ edge.node.name }}</h2>
              <div>{{ edge.node.path }}</div>
            </li>
          </ul>
        </section>
        <section id="projects" class="py-4 bg-green-200 sm:px-4">
          <h1 class="pb-4 text-2xl font-bold text-center">Projekty</h1>
          <ul class="flex flex-col justify-center w-full space-y-2 sm:space-x-4 sm:space-y-0 sm:flex-row">
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
          <ul class="flex flex-col justify-center w-full space-y-2 sm:space-x-4 sm:space-y-0 sm:flex-row">
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
  statistics: allStatistics {
    edges {
      node {
        model
        values {
          id
          label {
            cs
            pl
          }
          value
        }
      }
    }
  }
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
.bg-paralex-library:before {
  content: ' ';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.6;
  background-image: url('/assets/images/book-pattern.svg');
}

.bg-paralex-library > * {
  position: relative;
  z-index: 2;
  opacity: 1;
}

.bg-paralex-library {
  position: relative;
  overflow: hidden;
  @apply bg-indigo-700;
}

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
  methods: {
    assets_image (item) {
      return `/assets/images/${item}.svg`;
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
      ],
      ...this.$ogp({
        title: title,
        description: description,
        image: 'your-image-url',
        //appId: 'someFacebookAppID' // Facebook-only
      })
    }
  }
}
</script>
