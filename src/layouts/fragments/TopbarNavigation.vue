<template>
    <nav class="w-full" aria-label="Nastavení stránky">
      <h3 class="sr-only">Nastavení stránky</h3>
      <div class="px-2 mx-auto md:block sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-end h-10">
            <div class="flex flex-row items-end place-items-end">
                <h4 class="sr-only">Nastaví vizuálu</h4>
                <div class="p-2">
                    <button @click.prevent="a11y_toggleCSS">
                      {{a11y_status_string}} kaskádové styly.
                    </button>
                </div>
                <div class="p-2">
                    <ThemeSwitcher :theme="darkMode" @themeChanged="updateTheme"/>
                </div>
            </div>
            <div>
              <h4 class="sr-only">Jazyk</h4>
              <div class="h-8 p-2">
                <a href="/cs/" aria-label="Změn jazyk na češtinu." class='block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap transition duration-300 ease-in-out hover:bg-gray-100 hover:text-gray-900 focus:text-gray-900 focus:shadow-outline'>
                  <!-- country-flag country='cz' size='small'/ -->
                  Čeština
                </a>
              </div>
              <div class="h-8 p-2">
                <a href="/pl/" aria-label="Zmień język na polski." class=''>
                  <!--country-flag country='pl' size='small'/-->
                  Polski
                </a>
              </div>
            </div>
        </div>
      </div>
    </nav>
</template>

<script>
import ThemeSwitcher from  '@/components/ThemeSwitcher.vue';

export default {
  name: 'TopbarNavigation',
  components : {
    /*CountryFlag: () =>
        import ('vue-country-flag/')
        .then(m => m.CountryFlag)
        .catch(),*/
    ThemeSwitcher,
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
      this.a11y_status_string = window.a11y_css ? 'Zapnout' : 'Vypnout'; 
    }
  }
}
</script>