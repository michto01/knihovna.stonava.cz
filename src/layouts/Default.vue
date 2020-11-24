<template>
  <div :class="darkModeClass">
    <div class="flex flex-col w-full min-h-screen bg-gray-50 text-coal-800 dark:bg-coal-900 dark:bg-opacity-75">
      <!--div style="width: 100vw; height: 150vh;" class="fixed bg-red-400 -z-100"></div-->
      <!--Alert /-->
      
      <Navigation @themeChanged="themeChanged" :darkMode="isDark" /> 
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

