<template>
  <div :class="darkModeClass" @keyup.tab="a11yMenuVisible">
    <nav id="a11y-quickmenu" class="p-2 sr-only" :aria-label="$t('label.a11y.quick_access')" @keydown.18.prevent="">
      <h3 class="font-bold text-white font-2xl">{{$t('label.a11y.quick_access')}}</h3>
      <ul class="text-gray-50" id="a11y-quicknav-list">
        <li><a href="#navigation">{{$t('label.a11y.jump_navigation')}}</a></li>
        <li><a href="#content">{{$t('label.a11y.jump_content')}}</a></li>
        <li><a href="#footer">{{$t('label.a11y.jump_footer')}}</a></li>
      </ul>
      <hr role=separator class="sr-only">
    </nav>

    <div class>
      <Alert />
    </div>

    <div class="flex flex-col w-full min-h-screen bg-coal-50 text-coal-800 dark:bg-coal-900 dark:bg-opacity-75">
      <TopbarNavigation @themeChanged="themeChanged" :darkMode="isDark" />
      <Header />
      <main id="content" class="flex-grow"><!-- max-w-2xl p-4 mx-auto -->
        <slot />
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
import Header from './fragments/Header'
import TopbarNavigation from './fragments/TopbarNavigation'
import Footer from './fragments/Footer'
import Alert from '~/components/Alert'

export default {
  components: {
    Header,
    TopbarNavigation,
    Footer,
    Alert
  },
  data() {
      return {
        isDark : "native",
        a11yMenuIsVisible: false,
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
      if (process.isServer) return;
      localStorage.setItem('theme-dark', JSON.stringify(dark));
      this.isDark = dark;
    },
    a11yMenuVisible() {
      const wasVisible = this.a11yMenuIsVisible;
      this.a11yMenuIsVisible = (document.activeElement.parentElement.parentElement.id === 'a11y-quicknav-list');
      if (wasVisible !== this.a11yMenuIsVisible) {
        var menu = document.querySelector('#a11y-quickmenu')
        menu.classList.toggle('sr-only')
      }
    }
  },
  created() {
    if (process.isServer) return;
    const stored = JSON.parse(localStorage.getItem("theme-dark"));
    if (stored != null) {
      this.isDark = stored;
    }
  },
}
</script>
