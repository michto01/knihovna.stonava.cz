<template>
  <div class="w-full">
    <div class="px-2 mx-auto border-b-2 md:block sm:px-6 lg:px-8">
      <nav aria-labelby="page-settings">
        <h3 id="page-settings" class="sr-only">Nastavení stránky</h3>
          <div class="flex flex-wrap items-center justify-end">
              <div class="flex flex-row items-end space-x-4 place-items-end">
                  <h4 class="sr-only">Nastaví vizuálu</h4>
                  <div class="">
                      <button @click.prevent="a11y_toggleCSS">
                        {{a11y_status_string}} kaskádové styly.
                      </button>
                  </div>
                  <div class="h-full">
                      <ThemeSwitcher :theme="darkMode" @themeChanged="updateTheme"/>
                  </div>
              </div>
              <div>
                <h4 class="sr-only">Jazyk</h4>
                <LocaleSwitch />
              </div>
          </div>
      </nav>
    </div>
  </div>
</template>

<script>
import ThemeSwitcher from  '@/components/ThemeSwitcher.vue';
import LocaleSwitch from '@/components/LocaleSwitch.vue'

export default {
  name: 'TopbarNavigation',
  components : {
    /*CountryFlag: () =>
        import ('vue-country-flag/')
        .then(m => m.CountryFlag)
        .catch(),*/
    ThemeSwitcher,
    LocaleSwitch,
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