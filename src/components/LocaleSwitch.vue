<template>
<ClientOnly>
     <div x-on:click.away="open=false" class="relative z-40" x-data="{ open:false }">
        <span class="sr-only">Výběr jazyka: </span>
        <button
          x-on:click="open=!open"
          class="flex flex-row items-center w-full px-4 py-2 text-sm font-semibold text-left bg-transparent dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        >
          <svg class="inline w-5 h-5 mr-2" width=".7em" height=".7em" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
          </svg>
          <span>&nbsp;{{ $t('lang') }}&nbsp;</span>
          <svg width=".7em" height=".7em"  fill="currentColor" viewBox="0 0 20 20" x-bind:class="{'rotate-180': open, 'rotate-0': !open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1" clip-rule="evenodd" fill-rule="evenodd">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
          </svg>
        </button>
        <div
          class="absolute right-0 z-30 w-full mt-1 origin-top-right"
          x-transition:enter="motion-safe:transition ease-out duration-100"
          x-transition:enter-start="motion-safe:transform opacity-0 scale-95"
          x-transition:enter-end="motion-safe:transform opacity-100 scale-100"
          x-transition:leave="motion-safe:transition ease-in duration-75"
          x-transition:leave-start="motion-safe:transform opacity-100 scale-100"
          x-transition:leave-end="motion-safe:transform opacity-0 scale-95"
          x-show="open"
        >
          <div class="px-2 pt-2 pb-2 bg-white rounded shadow-lg dark-mode:bg-gray-700 ring-4 ring-blue-500">
            <div>
              <ul class="rounded">
                <li v-for="locale in availableLocales" :key="locale" :value="locale">
                  <a href="#" @click.prevent="localeChanged" :data-locale="locale" class="block w-full h-full p-1 px-2 rounded hover:bg-blue-300">{{$t('lang', locale)}}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
</ClientOnly>
</template>

<script>
import {routableLinks} from '@/locales/routes';

export default {
  data: function () {
    return {
      currentLocale: this.$i18n.locale.toString(),
      availableLocales: this.$i18n.availableLocales,
    }
  },
  mounted() {
    if (this.$isServer) return;
    window.Alpine = require('alpinejs');
  },
  methods: {
    locales (locale) {
      return this.$t('lang');
    },
    getRoutableLink (link, locale) {
      const links = routableLinks.filter(x => {
        return Object.entries(x).filter(o => {
          return o[1] == link || `${o[1]}/` == link //WARN: trailing slash !!!
        }).length
      })
      return links.length ? links[0] : null
    },
    localeChanged ($event) {
      const currentLocale = this.currentLocale
      const nextLocale = $event.srcElement.dataset.locale
      if (nextLocale == currentLocale) return;

      this.currentLocale = nextLocale
      this.$i18n.locale = this.currentLocale
      const route = this.getRoutableLink(this.$route.path, currentLocale)
      if (!route) {
        this.$router.push({
          path: this.$tp(this.$route.path, this.currentLocale, true)
        })
      } else {
        this.$router.push({
          path: route[this.currentLocale]
        })
      }
    }
  },
}
</script>

