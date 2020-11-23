<template>
  <div :class="isDark ? 'dark':''">
    <div class="flex flex-col w-full min-h-screen bg-white dark:bg-coal-900 dark:bg-opacity-75">
      <!--div style="width: 100vw; height: 150vh;" class="fixed bg-red-400 -z-100"></div-->
      <!--Alert /-->
      <header class="w-full">
        <Navigation @themeChanged=themeChanged />
      </header>
      <main class="flex-grow max-w-2xl p-4 mx-auto">
        <slot/>
          <div id="o-knihovne"></div>
          <div id="projekty"></div>
          <div id="vyveska"></div>
      </main>
      <Footer />
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
import Alert from '~/components/Alert.vue'
import Footer from '~/components/Footer.vue'

import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Navigation,
    Footer,
    Alert
  },
  data() {
    return {
      isDark : false,
    }
  },
  methods: {
    themeChanged : function(dark) {
      this.isDark = dark;
    }
  },
  created() {
    this.isDark = JSON.parse(localStorage.getItem("theme-dark")) || false;
  },
}
</script>

