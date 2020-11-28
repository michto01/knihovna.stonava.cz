
<template>
  <div class="w-full">
    <!-- MAIN navigation content>=> will jump to correct location on DOM load -->
    <portal :to="navigationStyle">
      <ul class="flex flex-col items-stretch w-full h-full space-y-1 sm:space-y-0 place-items-stretch justify-items-stretch sm:place-content-evenly sm:flex-row">
        <li class="menu-item" :class="{'is-active': subIsActiveExact('/')}">
          <g-link to="/" exact>Domů</g-link>
        </li>
        <li class="menu-item" :class="{'is-active': subIsActive('/about')}"><g-link to="/about/">O nás</g-link></li>
        <li class="menu-item" :class="{'is-active': subIsActive('/cs/info/pravni-upozorneni/')}"><g-link to="/cs/info/pravni-upozorneni/">Právní upozornění</g-link></li>
        <li class="menu-item" :class="{'is-active': subIsActive('#')}"><a href="#">Akce</a></li>
        <li class="menu-item" :class="{'is-active': subIsActive('#')}"><a href="#">Jiné</a></li>
      </ul>
    </portal>
    <!-- MAIN navigation content -->

    <div class="w-full">
      <nav class="">
        <h3 class="sr-only">Hlavní menu</h3>
        <div class="px-2 mx-auto bg-yellow-400 rounded-full max-w-7xl sm:px-6 lg:px-8">
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
              <div class="hidden w-full sm:block sm:ml-6">
                <div class="w-full h-full space-x-4">
                  <portal-target class="w-full h-full" name="normal" :disabled="isOpen" slim/>
                </div>
              </div>
            </div>
            <!-- AFTER icons -->
            <!--div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button class="hidden p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white md:block">
                <span class="sr-only">View notifications</span>
                <! -- Heroicon name: bell -- >
                <svg role="img" width="1em" height="1em" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <button class="hidden p-1 m-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white md:block" id="search-menu" aria-haspopup="true">
                <span class="sr-only">Open user menu</span>
                <! -- Heroicon name: search -- >
                <svg role="img" width="1em" height="1em" class="w-6 h-6 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div-->
          </div>
        </div>

        <div v-if="isOpen" class="transition-transform duration-700 ease-in-out sm:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 shadow-lg">
            <portal-target name="mobile" :disabled="!isOpen" slim />
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.menu-item {
  @apply box-border text-base text-navy-800 font-medium h-full;
  @apply block hover:text-white py-2 px-2;
  @apply border-b-4 border-transparent;
  @apply focus-within:ring-4 rounded-t;   
}
.menu-item:hover {
  @apply box-border;
  @apply border-b-4 border-yellow-900 border-opacity-20;
  @apply bg-opacity-80 rounded-t;
}

.menu-item a {
  @apply h-full focus:outline-none;
}

/*.is-active {}*/

.menu-item.is-active {
  @apply box-border;
  @apply border-b-4 border-yellow-900 border-opacity-20;
  @apply bg-opacity-80 rounded-t;
  @apply text-green-50;
}
</style>

<script>
import breakpointHelper from 'breakpoint-helper';
import resolveConfig from 'tailwindcss/resolveConfig'
import config from '@/../tailwind.config.js';
const fullConfig = resolveConfig(config);
const bph = breakpointHelper(fullConfig.theme.screens)

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
  watch: {
      isOpen: function() {
         this.navigationStyle = this.isOpen ? "mobile" : "normal";
      }
  },
  methods: {
    subIsActiveExact(input) {
      console.log(input, this.$route.path, input == this.$route.path)
      this.$route.path == input;
    },
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input];
    
      return paths.some(path => {
    	  return this.$route.path.indexOf(path) === 0 // current path starts with this path string
    	})
    }
  }
}
</script>
