<template>
  <header class="w-full">
     <div class="w-full bg-green-800 dark:bg-coal-900">
    <!-- MAIN navigation content -->
    <portal :to="navigationStyle">
      <ul class="flex flex-col items-stretch w-full p-1 space-y-1 place-items-stretch justify-items-stretch sm:place-content-evenly sm:flex-row">
        <li class=menu-item><g-link to="/">Domů</g-link></li>
        <li class=menu-item><g-link to="/about/">O nás</g-link></li>
        <li class=menu-item><a href="#">Projects</a></li>
        <li class=menu-item><a href="#">Calendar</a></li>
      </ul>
    </portal>

    <div class="flex items-center flex-shrink-0">
      <a href="/" alt="Domů" class="visited:text-gray-300">
        <div class="block w-auto h-10 sm:hidden lg:hidden">
          <g-image class="inline w-auto h-10" src="~/@assets/images/logo@3x.png" alt="Logo" />
          <span class="block font-semibold text-gray-300">Místní knihovna <span class="block text-gray-100 font-bold;">Stonava</span></span>
        </div>
        <!--g-image class="hidden w-auto h-10 sm:block lg:hidden" alt="Logo" src="~/@assets/images/logo@3x.png"/-->
        <div class="hidden w-auto h-10 sm:block">
          <g-image class="inline w-auto h-10" src="~/@assets/images/logo@3x.png" alt="Logo" />
          <span class="block text-teal-300 brand">Místní knihovna <span class="block brand-alt">Stonava</span></span>
        </div>
      </a>
    </div>
  
    <nav class="w-full" aria-label="Nastavení stránky">
      <div class="px-2 mx-auto md:block sm:px-6 lg:px-8">
        <div class="max-w-7xl">
          <search />
        </div>
        <div class="">
          <div class="flex flex-row-reverse flex-wrap items-center h-12 justify-items-auto">
              <div class="h-8 p-2">
                <a href="#cs" tabindex="3" aria-label="Změn jazyk na češtinu." class='px-1 border border-transparent shadow-xs hover:outline-none hover:ring-2 hover:ring-purple-600 hover:border-transparent'><country-flag country='cz' size='small'/></a>
              </div>
              <div class="h-8 p-2">
                <a href="#pl" tabindex="2" aria-label="Zmień język na polski." class=''><country-flag country='pl' size='small'/></a>
              </div>
              <div class="h-8 p-2">
                <ThemeSwitcher :theme="darkMode" @themeChanged="updateTheme"/>
              </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="bg-green-700 dark:bg-coal-800">
      <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button @click.prevent="isOpen = !isOpen" class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
              <span class="sr-only">Rozbalit hlavní menu</span>
              <svg :class="isOpen ? 'hidden':'block'" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg :class="isOpen ? 'block':'hidden'" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
            <div class="hidden w-full sm:block sm:ml-6">
              <div class="space-x-4">
                <portal-target name="normal" :disabled="isOpen" slim/>
              </div>
            </div>
          </div>
          <!-- AFTER icons -->
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button class="hidden p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white md:block">
              <span class="sr-only">View notifications</span>
              <!-- Heroicon name: bell -->
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button class="hidden p-1 m-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white md:block" id="search-menu" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              <!-- Heroicon name: search -->
              <svg class="w-6 h-6 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div v-if="isOpen" class="transition-transform duration-700 ease-in-out sm:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 shadow-lg">
          <portal-target name="mobile" :disabled="!isOpen" slim />
        </div>
      </div>
    </div>
  </div>
  </header>
</template>

<style>
.menu-item {
  @apply text-base text-gray-300 font-medium;
  @apply block px-3 py-2 rounded-md hover:text-white hover:bg-gray-700 focus:border-transparent;
}
</style>

<script>
import breakpointHelper from 'breakpoint-helper';
import resolveConfig from 'tailwindcss/resolveConfig'
import config from '../../tailwind.config.js';

import CountryFlag from 'vue-country-flag'
import ThemeSwitcher from './ThemeSwitcher.vue';
import Search from './Search.vue';

const fullConfig = resolveConfig(config);
const bph = breakpointHelper(fullConfig.theme.screens)

export default {

  components : {
    CountryFlag,
    ThemeSwitcher,
    Search
  },
  created() {
    bph.listen('sm', ({ matches }) => {
      console.log("boom ..")
      this.isOpen = false;
    });
  },
  data() {
    return {
      isOpen: false,
      navigationStyle: "normal",
    }
  },
  props: {
    darkMode: {
      type: String,
      required: true,
    }
  },
  watch: {
      isOpen: function() {
         this.navigationStyle = this.isOpen ? "mobile" : "normal";
      }
  },
  methods : {
    updateTheme: function(value) {
      this.$emit('themeChanged', value)
    }
  }
}
</script>
