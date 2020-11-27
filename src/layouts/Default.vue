<template>
  <div :class="darkModeClass">
    <!--div style="width: 100vw; height: 150vh;" class="fixed bg-red-400 -z-100">
      <Alert />
    </div-->

    <nav class="sr-only" :aria-label="$t('label.a11y.quick_access')">
      <h3>{{$t('label.a11y.quick_access')}}</h3>
      <ul class="sr-only">
        <li><a href="#navigation">{{$t('label.a11y.jump_navigation')}}</a></li>
        <li><a href="#content">{{$t('label.a11y.jump_content')}}</a></li>
        <li><a href="#footer">{{$t('label.a11y.jump_footer')}}</a></li>
      </ul>
      <hr role=separator class="sr-only">
    </nav>

    <div class="flex flex-col w-full min-h-screen bg-gray-50 text-coal-800 dark:bg-coal-900 dark:bg-opacity-75">
      <TopbarNavigation @themeChanged="themeChanged" :darkMode="isDark" />
      <Header />
      <main id="content" class="flex-grow max-w-2xl p-4 mx-auto">
        <slot />
          <div id="o-knihovne"></div>
          <div id="projekty"></div>
          <div id="vyveska"></div>
      </main>
      <Footer id="footer" />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from './fragments/Header.vue'
import TopbarNavigation from './fragments/TopbarNavigation.vue'
import Footer from './fragments/Footer.vue'
import Alert from '~/components/Alert.vue'

export default {
  components: {
    Header,
    TopbarNavigation,
    Footer,
    Alert
  },
  data() {
      return {
        isDark : "native"
      }
  },
  computed: {
    darkModeClass() {
      if (!process.isClient) return;
      if (this.isDark === 'native') {
          const preffered = window.matchMedia('(prefers-color-scheme: dark)').matches;
          return preffered ? "dark" : "light"
      }
      return this.isDark;
    }
  },
  methods: {
    themeChanged : function(dark) {
      if (!process.isClient) return;
      localStorage.setItem('theme-dark', JSON.stringify(dark));
      this.isDark = dark;
    }
  },
  created() {
    if (!process.isClient) return;
    const stored = JSON.parse(localStorage.getItem("theme-dark"));
    if (stored != null) {
      this.isDark = stored;
    }
  },
}
</script>

