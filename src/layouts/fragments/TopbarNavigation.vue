<template>
  <div class="w-full">
    <div class="px-2 mx-auto border-b-2 md:block sm:px-6 lg:px-8">
      <nav aria-labelby="page-settings">
        <h3 id="page-settings" class="sr-only">{{ $t('label.settings.page') }}</h3>
          <div class="flex flex-wrap items-center content-center justify-end">
            <p class="flex-grow flex-shrink hidden text-sm font-semibold sm:block"> 
                {{$t('opening-hours')}}: <span class="font-normal">pondělí - 9:00-11:00, 11:30-17:00; čtvrtek - 12:00-18:00</span>
            </p>
            <div class="flex flex-row gap-x-4">
              <h4 class="sr-only">{{ $t('label.settings.apperance') }}</h4>
              <div class="">
                <button @click.prevent="a11y_toggleCSS">
                  {{ $t(`label.styles.${a11y_status_string}`) }} {{ $t('label.styles.css') }}
                </button>
              </div>
              <div class="h-full">
                <ThemeSwitcher :theme="darkMode" @themeChanged="updateTheme"/>
              </div>
            </div>
            <div>
              <h4 class="sr-only">{{ $t('label.settings.language') }}</h4>
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
    ThemeSwitcher,
    LocaleSwitch,
  },
  data() {
    return {
      a11y_status_string: 'off'
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
      this.a11y_status_string = window.a11y_css ? 'on' : 'off'; 
    }
  }
}
</script>