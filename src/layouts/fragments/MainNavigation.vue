
<template>
  <div class="w-full">
    <!-- MAIN navigation content>=> will jump to correct location on DOM load -->
    <portal :to="navigationStyle">
      <!-- items-stretch sm:place-content-evenly -->
      <ul class="flex flex-col w-full h-full space-y-1 sm:space-y-0 sm:space-x-4 place-items-end justify-items-end sm:flex-row">
        <li class="menu-item"><g-link :to="$tp('/')" class="block w-full h-full" exact>Domů</g-link></li>
        <li class="menu-item"><g-link :to="$tp('/about/')" class="block w-full h-full">O nás</g-link></li>
        <li class="menu-item"><g-link :to="$tp('/cs/info/pravni-upozorneni/')" class="block w-full h-full">Právní upozornění</g-link></li>
        <li class="menu-item"><a href="#" class="block w-full h-full">Akce</a></li>
        <li class="menu-item"><a href="#" class="block w-full h-full">Jiné</a></li>
      </ul>
    </portal>
    <!-- MAIN navigation content -->

    <div class="w-full">
      <nav class="">
        <h3 class="sr-only">Hlavní menu</h3>
        <div class="max-w-6xl mx-auto bg-yellow-400 lg:rounded-full md:px-4 sm:px-6 lg:px-8">
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
                <div v-if="isOpen" class="sm:hidden">
                  <div class="px-2 pt-2 pb-3 space-y-1 bg-yellow-500 shadow-md">
                    <portal-target name="mobile" :disabled="!isOpen" slim />
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

<style scoped>
.menu-item {
  @apply box-border text-base text-navy-800 font-medium h-full;
  @apply block hover:text-white pt-2;
  @apply focus-within:ring-4;
}
.menu-item:hover {
  @apply box-border;
  /*@apply border-b-8 border-yellow-900 border-opacity-20;*/
  @apply bg-opacity-80;
}

.menu-item a {
  @apply h-full w-full focus:outline-none;
  @apply border-b-8 border-transparent;
}
.menu-item .is-exact.is-active {
  @apply h-full w-full focus:outline-none;
  @apply border-b-8 border-yellow-900 border-opacity-20;
  @apply box-border bg-opacity-80  text-green-50;
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
