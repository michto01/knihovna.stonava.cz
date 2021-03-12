<template>
  <Layout>
    <article class="flex flex-col w-full">
      <!-- MAIN section -->
      <section class="py-2 bg-coal-100 md:p-16 sm:p-24 lg:px-36 lg:py-16">
        <h1 class="text-4xl font-black text-center sm:text-left">{{ $t('label.life-of-library') }}</h1>
        <div class="flex flex-col px-4 space-y-4 lg:flex-row lg:p-10 lg:space-x-8 lg:space-y-8">
          <main class="flex-grow">
            <h2 class="py-4 text-2xl font-extrabold text-indigo-900">{{ $t('label.events') }}</h2>
            <div>
              <div class="flex flex-col justify-center w-full space-y-2">
                <div v-for="(edge, index) in lastEvents.edges" :key="index">
                  <EventCard
                    :title="edge.node.title[0].text"
                    :abstract="edge.node.short"
                    :link="event_link(edge.node.meta.lang, edge.node.meta.uid)"
                    :date="edge.node.created"  />
                </div>
                <div class="self-end">
                  <g-link :to="moreEventsLink" class="btn">{{ $t('label.more-events') }}&nbsp;&rarr;</g-link>
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
                  <li v-for="(a, index) in relatedLinks" :key="index">
                    <a :href="a.link" target="_blank" rel="noopener noreferrer">{{ a.name }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <PatronLogin-Dawinci class="w-2/3 shadow-lg" />
          </aside>
        </div>
      </section>
      <!-- RECOMENDATION section -->
      <section id="recomendations" class="py-4">
        <div class="p-4 md:p-8">
          <h1 class="text-2xl font-extrabold text-center text-indigo-800">
            Novinky v knihovně
          </h1>
          <h2 class="pb-4 text-sm font-semibold text-center">
            Stále rozšířujeme naši nabídku, zde jsou poslední přidané tituly
          </h2>
          <div class="flex flex-row flex-wrap justify-center space-x-2">
            <div v-for="i in [1, 2, 3]" :key="i">
              <img
                class="inline"
                src="http://www.rkka.cz/dawincibooklet/obrazek.php?id=978-80-242-6850-7"
                alt="Obal knihy"
                />
            </div>
          </div>
        </div>
      </section>
      <!-- BLOG section -->
      <section>
        <posts-carousel />
      </section>
      <section id="blog" class="bg-indigo-50">
        <div class="p-4 md:p-8">
          <h1 class="pb-4 text-2xl font-extrabold text-center text-indigo-800">
            Blog
          </h1>
          <!-- Blog carousel -->
          <div class="relative">
            <div class="flex flex-col justify-center space-x-4 sm:flex-row">
              <div v-for="edge in $page.projects.edges" :key="edge.node.id" class="relative items-center flex-grow block w-full p-4 overflow-hidden bg-white rounded-t-lg shadow-lg md:w-2/5 rounded-2xl"
                style="min-height: 19rem">
                <div class="absolute inset-0 w-full h-full bg-red-200 rounded">
                  <g-image :src="edge.node.image" class="fit-cover" width="5rem" height="5rem" aria-hidden="true" alt></g-image>
                </div>
                <div
                  class="absolute inset-0 flex flex-col justify-end w-full p-4 bg-gradient-to-b from-transparent to-indigo-500">
                  <h2 class="text-xl font-extrabold text-coal-50">
                    {{ edge.node.name }}
                  </h2>
                  <div>{{ edge.node.path }}</div>
                </div>
              </div>
            </div>
            <button class="absolute top-0 left-0 w-12 h-12 mt-32 -ml-6 text-2xl text-indigo-600 bg-white rounded-full shadow-md hover:text-indigo-400 focus:text-indigo-400 focus:outline-none focus:shadow-outline">
            <span class="block" style="transform: scale(-1)">&#x279c;</span>
            </button>
            <button class="absolute top-0 right-0 w-12 h-12 mt-32 -mr-6 text-2xl text-indigo-600 bg-white rounded-full shadow-md hover:text-indigo-400 focus:text-indigo-400 focus:outline-none focus:shadow-outline">
            <span class="block" style="transform: scale(1)">&#x279c;</span>
            </button>
          </div>
        </div>
      </section>
      <!-- PROJECTS section -->
      <section id="projects" class="bg-coal-100 sm:px-4">
        <div class="p-4 md:p-8 lg:p-16">
          <h1 class="pb-4 text-2xl font-black text-center lg:pb-16">Projekty</h1>
          <ul class="flex flex-col justify-center w-full space-y-2 sm:space-x-4 sm:space-y-0 sm:flex-row">
            <li v-for="edge in $page.projects.edges" :key="edge.node.id" class="block p-4 bg-white rounded shadow-sm">
              <div class="m-1 bg-red-200 rounded">
                <g-image :src="edge.node.image" width="5em" height="5em" alt=""></g-image>
              </div>
              <h2 class="font-extrabold text-md">{{ edge.node.name }}</h2>
              <div>{{ edge.node.path }}</div>
            </li>
          </ul>
        </div>
      </section>
      <!-- LIBRARY section -->
      <section id="library" class="bg-paralex-library">
        <div class="p-4 md:p-8">
          <h1 class="text-2xl font-extrabold text-center text-indigo-800">Knihovna</h1>
          <h2 class="pb-4 text-sm font-semibold text-center text-indigo-50">Přehled zajímavých čísel z místní knihovny</h2>
          <div class="flex flex-col flex-wrap justify-center p-2 space-y-2 sm:flex-nowrap sm:space-y-0 sm:space-x-2 sm: lg:space-x-8 sm:flex-row">
            <div v-for="edge in $page.statistics.edges" :key="edge.node.model" class="flex flex-row w-full p-2 duration-150 ease-in-out transform bg-white border rounded shadow-sm motion-reduce:transform-none h-max sm:flex-col hover:-translate-y-2 hover:shadow-md">
              <g-image :src="assets_image(edge.node.model)" alt="" aria-hidden="true"  width="2em" height="2em" class="sm:mx-auto h-36 w-36" />
              <div class="p-4 text-center">
                <p v-for="val in edge.node.values" :key="val.id">
                  <span class="font-semibold">{{ val.value }}&nbsp;</span>
                  <span>{{ val.label[$i18n.locale.split("-")[0]] }}</span>
                </p>
              </div>
            </div>
          </div>
          <br />
          <div class="text-center">
            <a href="/cs/o-knihovne" class="px-6 py-3 font-semibold text-center text-white duration-300 ease-in-out transform bg-indigo-700 rounded-lg hover:bg-indigo-500 hover:text-white motion-reduce:transform-none hover:scale-150">
              Více o knihovně
            </a>
          </div>
        </div>
      </section>
      <section id="contact" class="py-4">
        <div class="p-4 md:p-8">
          <h1 class="pb-4 text-2xl font-bold text-center">Kontaktujte nás</h1>
          <div class="relative flex justify-center items-top dark:bg-gray-900 sm:items-center sm:pt-0">
            <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
              <div class="mt-8 overflow-hidden">
                <div class="grid grid-cols-1 md:grid-cols-2">
                  <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                    <h1 class="text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
                      Ptejte se knihovny
                    </h1>
                    <p class="mt-2 text-lg font-medium text-gray-600 text-normal sm:text-2xl dark:text-gray-400">
                      Rádi zodpovíme Vaše dotazy
                    </p>
                    <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                      <div class="w-40 ml-4 font-semibold tracking-wide text-md">
                        Stonava č. p. 825<br/>
                        735 34 STONAVA
                      </div>
                    </div>
                    <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div class="w-40 ml-4 font-semibold tracking-wide text-md">
                        +420 596 422 051
                      </div>
                    </div>
                    <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div class="w-40 ml-4 font-semibold tracking-wide text-md">
                        mkston@stonava.cz
                      </div>
                    </div>
                  </div>
                  <form class="flex flex-col justify-center p-6">
                    <div class="flex flex-col">
                      <label for="name" class="hidden">Jméno</label>
                      <input type="name" name="name" id="name" placeholder="Jméno" class="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 dark:bg-gray-800 dark:border-gray-700 focus:border-indigo-500 focus:outline-none" />
                    </div>
                    <div class="flex flex-col mt-2">
                      <label for="email" class="hidden">E-mail</label>
                      <input type="email" name="email" id="email" placeholder="E-mail" class="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 dark:bg-gray-800 dark:border-gray-700 focus:border-indigo-500 focus:outline-none" />
                    </div>
                    <div class="flex flex-col mt-2">
                      <label for="tel" class="hidden">Zpráva</label>
                      <textarea type="msg" name="msg" id="msg" placeholder="Zpráva" class="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 dark:bg-gray-800 dark:border-gray-700 focus:border-indigo-500 focus:outline-none"/>
                    </div>
                    <button type="submit" class="px-6 py-3 mt-3 font-bold text-white transition duration-300 ease-in-out bg-indigo-600 rounded-lg md:w-32 hover:bg-blue-dark hover:bg-indigo-500">
                      Odeslat
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </Layout>
</template>

<page-query>
  fragment Event on prismicio_EventConnectionEdge {
    node {
      title
      short
      created
      body
      meta : _meta {
        lang
        uid
        lastPublicationDate
      }
    }
  }

  query HomePage {
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
      pl_events: allEvents(sortBy: created_DESC, first: 4, lang: "pl-cz") {
        edges {
          ...Event
        }
      }
      cs_events: allEvents(sortBy: created_DESC, first: 4, lang: "cs-cz") {
        edges {
          ...Event
        }
      }
    }
  }
</page-query>

<style lang="scss" scoped>
  .btn {
    @apply p-2;
    @apply rounded;
    @apply text-sm;
    @apply text-right;
    @apply text-indigo-50;
    @apply font-extrabold;
    @apply bg-indigo-700;
    @apply hover:bg-indigo-500;
    @apply hover:text-white;
  }

  .bg-paralex-library {
    position: relative;
    overflow: hidden;
    @apply bg-indigo-700;

    &::before {
      content: " ";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0.6;
      background-image: url("/assets/images/book-pattern.svg");
    }

    div {
      position: relative;
      z-index: 2;
      opacity: 1;
      backdrop-filter: blur(2px);
    }
  }

  .home-links {
    @apply text-indigo-700;

    a {
      @apply underline;

      &::after {
        display: inline-block;
        width: 1rem;
        height: 1rem;
        content: url("data:image/svg+xml,%3Csvg fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z'%3E%3C/path%3E%3Cpath d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z'%3E%3C/path%3E%3C/svg%3E");
        @apply underline;
      }
    }
  }
</style>

<script>
  import OpacNewRecordsExternal from "~/components/OpacNewRecordsExternal";
  import PatronLoginDawinci from "~/components/PatronLoginDawinci";
  import EventCard from '@/components/EventCard';
  import About from "./About";

  import { eventLink } from '@/mixins/eventLink';
  import { routableLinks, namedRoutes } from '@/locales/routes';
  import PostsCarousel from '~/components/PostsCarousel';

  export default {
    components: {
      PatronLoginDawinci,
      OpacNewRecordsExternal,
      About,
      EventCard,
      PostsCarousel
    },
    created() {
      //console.log(this.$page.prismicio.events.edges);
    },
    data() {
      return {
        locale: "cs-cz",
      };
    },
    methods: {
      assets_image (item) {
        return `/assets/images/${item}.svg`;
      },
      event_link (lang, uid) {
        return eventLink(lang, uid);
      }
    },
    computed: {
      relatedLinks() {
        return [
          {link: "//gridsome.org/docs/", name: "Gridsome Docs"},
          {link: "//github.com/gridsome/gridsome", name: "GitHub"},
          {link: "//sknizkoudozivota.cz", name: "S knížkou do života"},
          {link: "//stonava.cz", name: "Obec Stonava"},
          {link: "//nkp.cz", name: "Národní knihovna"},
          {link: "//rkka.cz", name: "Regionální knihovna Karviná"},
        ]
      },
      lastEvents () {
        const locale = this.$i18n.locale.toString();
        if (locale == "cs-CZ") {
          return this.$page.prismicio.cs_events;
        }
        if (locale == "pl-CZ") {
          return this.$page.prismicio.pl_events;
        }
        return null;
      },
      moreEventsLink () {
        const a = '/events';
        const locale = this.$i18n.locale.toString();
        const names = namedRoutes.filter(r => {return r.canonical == a})
        const links = routableLinks.filter(r => {return r.canonical == a})
        return links.length ? links[0][locale] : '#'
      }
    },
    metaInfo () {
      const title = "Knihovna Stonava";
      const description = "Půjčování knih, periodik, pořádání kulturních akcí.";

      return {
        title: title,
        meta: [
          {
            name: "description",
            content: description,
          },
          {
            key: "og:title",
            name: "og:title",
            content: title,
          },
          {
            key: "twitter:title",
            name: "twitter:title",
            content: title,
          },
          {
            key: "og:description",
            name: "og:description",
            content: description,
          },
          {
            key: "twitter:description",
            name: "twitter:description",
            content: description,
          },
        ],
        ...this.$ogp({
          title: title,
          description: description,
          image: "your-image-url",
          //appId: 'someFacebookAppID' // Facebook-only
        }),
      };
    },
  };
</script>