<template>
  <header class="w-full">
    <div class="w-full bg-green-800 dark:bg-coal-900">
    
    <div class="flex items-center flex-shrink-0">
      <a href="/" class="visited:text-gray-300">
        <div class="block w-auto h-10">
          <g-image class="inline w-auto h-20" width="30em" height="50em"  src="~/@assets/images/knihovna-stonava-logo.svg" alt="Logo" />
          <span class="block font-semibold text-gray-300">Místní knihovna <span class="block text-gray-100 font-bold;">Stonava</span></span>
        </div>
      </a>
    </div>

    <nav class="w-full" aria-label="Nastavení stránky">
      <h3 class="sr-only">Nastavení stránky</h3>
      <div class="px-2 mx-auto md:block sm:px-6 lg:px-8">
        <div class="max-w-7xl">
            <Search />
        </div>
        <div class="">
          <div class="flex flex-wrap items-center h-12 justify-items-auto">
              <div>
                  <h4 class="sr-only">Nastaví vizuálu</h4>
                  <div>
                      <button @click.prevent="a11y_toggleCSS">
                        {{a11y_status_string}} kaskádové styly.
                      </button>
                  </div>
                  <div class="h-8 p-2">
                      <ThemeSwitcher :theme="darkMode" @themeChanged="updateTheme"/>
                  </div>
              </div>
              <div>
                <h4 class="sr-only">Jazyk</h4>
                <div class="h-8 p-2">
                  <a href="#cs" aria-label="Změn jazyk na češtinu." class='px-1 border border-transparent shadow-xs hover:outline-none hover:ring-2 hover:ring-purple-600 hover:border-transparent'>
                    <!-- country-flag country='cz' size='small'/ -->
                    Čeština
                  </a>
                </div>
                <div class="h-8 p-2">
                  <a href="#pl" aria-label="Zmień język na polski." class=''>
                    <!--country-flag country='pl' size='small'/-->
                    Polski
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </nav>
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
import ThemeSwitcher from  '@/components/ThemeSwitcher.vue';
import Search from '@/components/Search.vue';

export default {
  components : {
    /*CountryFlag: () =>
        import ('vue-country-flag/')
        .then(m => m.CountryFlag)
        .catch(),*/
    ThemeSwitcher,
    Search
  },
  data() {
    return {
      a11y_status_string: 'Vypnout'
    }
  },
  props: {
    darkMode: {
      type: String,
      required: true,
    }
  },
  mounted() {
    if (this.$isServer) return;
    if (window.a11_css == undefined) return;
    this.a11y_toggleCSS(window.a11y_css);
  },
  methods : {
    updateTheme: function(value) {
      this.$emit('themeChanged', value);
    },
    a11y_toggleCSS() {
      if (this.$isServer) return;

      if (window.a11y_css == undefined) {
        window.a11y_css = true;
      } else {
        window.a11y_css = !window.a11y_css;
      }
      Array.from(document.styleSheets).forEach(s => s.disabled = window.a11y_css);
      this.a11y_status_string = window.a11y_css ? 'Vypnout' : 'Zapnout'; 
    }
  }
}
</script>
