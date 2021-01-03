
<template>
  <div class="w-full">
    <portal :to="navigationStyle">
      <!-- items-stretch sm:place-content-evenly -->
      <ul class="flex flex-col w-full h-full space-y-1 sm:space-y-0 sm:flex-row">
        <li v-for="item in menuItems" :key="item.name" class="menu-item">
          <g-link :to="item.link" class="block w-full h-full">{{item.name}}</g-link>
        </li>
        <li class="menu-item"><a href="#" class="block w-full h-full">Další</a></li>
      </ul>
    </portal>
    <!-- MAIN navigation content -->

    <div class="w-full">
      <nav class="">
        <h3 class="sr-only">Hlavní menu</h3>
        <div class="max-w-6xl mx-auto lg:rounded-full md:px-4 sm:px-6 lg:px-8">
          <div class="relative flex items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <!-- Mobile menu button-->
              <button @click.prevent="isOpen = !isOpen" class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                <span class="sr-only">Rozbalit hlavní menu</span>
                <svg :class="isOpen ? 'hidden':'block'" role="img" width="1em" height="1em" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg :class="isOpen ? 'block':'hidden'" role="img" width="1em" height="1em" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex items-center justify-center flex-1 h-full sm:items-stretch sm:justify-start">
              <div class="w-full sm:ml-6">
                <div class="hidden w-full h-full space-x-4 sm:block">
                  <portal-target class="w-full h-full" name="normal" :disabled="isOpen"/>
                </div>
                <div v-if="isOpen" class="sm:hidden">
                  <div class="p-2 pb-3 space-y-1 shadow-md">
                    <portal-target name="mobile" :disabled="!isOpen" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import breakpointHelper from 'breakpoint-helper';
import resolveConfig from 'tailwindcss/resolveConfig';
import config from '@/../tailwind.config';
const fullConfig = resolveConfig(config);
const bph = breakpointHelper(fullConfig.theme.screens);

import {routableLinks, namedRoutes} from '@/locales/routes';

export default {
  created() {
    if (!process.isClient) return;
    bph.listen('sm', ({ matches }) => {
      this.isOpen = false;
    });
  },
  data() {
    return {
      isOpen: false,
      navigationStyle: "normal",
    }
  },
  computed: {
    menuItems () {
      return [
        '/',
        '/about',
        '/events',
        '/projects',
        '/blog',
        '/info',
        '/contacts'
      ].map(a => {
        const locale = this.$i18n.locale.toString();
        const names = namedRoutes.filter(r => {return r.canonical == a})
        const links = routableLinks.filter(r => {return r.canonical == a})
        return {
          name: names.length ? names[0][locale] : a.substring(1),
          link: links.length ? links[0][locale] : '#'
        }
      })
    }
  },
  watch: {
      isOpen: function() {
         this.navigationStyle = this.isOpen ? "mobile" : "normal";
      }
  },
  methods: {
    subIsActiveExact (input) {
      console.log(input, this.$route.path, input == this.$route.path)
      this.$route.path == input;
    },
    subIsActive (input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some(path => {
    	  return this.$route.path.indexOf(path) === 0 // current path starts with this path string
    	})
    }
  }
}
</script>

<style scoped>
.menu-item {
  @apply box-border text-base text-navy-800 font-medium h-full;
  @apply block pt-1 ; /*hover:bg-coal-200;*/
  @apply focus-within:ring-4;
}
.menu-item:hover {
  @apply bg-opacity-80;
}

.menu-item a {
  @apply h-full w-full focus:outline-none;
  @apply hover:border-indigo-600 hover:border-opacity-70;
  @apply border-b-4 border-transparent md:px-2 lg:px-4;
}

.menu-item .is-exact.is-active {
  @apply h-full w-full focus:outline-none;
  @apply border-b-4 border-indigo-600;
  @apply text-indigo-600 font-bold;
  @apply box-border bg-opacity-80
}
</style>
