
<template>
  <div class="w-full">
    <portal :to="navigationStyle">
      <ul class="flex flex-col justify-center w-full h-full space-y-1 sm:space-y-0 sm:flex-row">
        <li v-for="item in menuItems" :key="item.name" class="menu-item">
          <g-link :to="item.link" class="block w-full h-full">{{item.name}}</g-link>
        </li>
        <li class="menu-item"><a href="#" class="block w-full h-full">Další</a></li>
      </ul>
    </portal>
    <!-- MAIN navigation content -->
    <nav class="w-full main-menu" aria-labelledby="mainMenu_label">
      <h3 id="mainMenu_label" class="sr-only">Hlavní menu</h3>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <MenuButton :expanded="isOpen" @click="isOpen = !isOpen" /> <!-- Mobile menu button-->
        </div>
      </div>
      <div class="max-w-6xl mx-auto lg:rounded-full md:px-4 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between">
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
</template>

<script>
import MenuButton from '@/components/MenuButton';

import breakpointHelper from 'breakpoint-helper';
import resolveConfig from 'tailwindcss/resolveConfig';
import config from '@/../tailwind.config';
const fullConfig = resolveConfig(config);
const bph = breakpointHelper(fullConfig.theme.screens);

import {routableLinks, namedRoutes} from '@/locales/routes';

export default {
  components: {
    MenuButton
  },
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

<style lang="scss" scoped>
.menu-item {
  @apply box-border text-base text-navy-800 font-medium h-full block pt-1 focus-within:ring-4;

  &:hover {
    @apply bg-opacity-80;
  }

  a {
    @apply h-full w-full focus:outline-none;
    @apply hover:border-indigo-600 hover:border-opacity-70;
    @apply border-b-4 border-transparent md:px-2 lg:px-4;
  }

  .is-exact.is-active {
    @apply h-full w-full focus:outline-none;
    @apply border-b-4 border-indigo-600;
    @apply text-indigo-600 font-bold;
    @apply box-border bg-opacity-80
  }
}

@keyframes reveal {

}
</style>
