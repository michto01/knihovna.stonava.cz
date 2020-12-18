<template>
  <header class="w-full shadow-lg dark:bg-coal-900 hero">
    <div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-2">
      <div class="flex flex-col items-center sm:flex-row justify-items-center">
        <div class="content-center rounded focus:outline-none wrapper-logo focus-within:ring-4 focus-within:ring-yellow-600 focus-within:ring-opacity-75 focus-within:ring-offest-2">
          <a href="/" class="focus:outline-none">
            <div class="flex w-full h-full">
              <g-image class="w-1/4 h-full" width="120" height="120" src="~/@assets/images/knihovna-stonava-logo.svg" :alt="description" />
              <div class="flex-grow leading-none">
                <p class="flex flex-col justify-center h-full">
                  <span class="inline font-sans text-base font-bold sm:block sm:text-2xl text-coal-700">{{$t('label.siteName.org')}}&nbsp;</span>
                  <span class="text-coal-800 font-bold sm:text-xl text-sm;">{{$t('label.siteName.loc')}}</span>
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="flex-grow flex-shrink hero"></div>
        <div class="flex flex-col justify-end max-w-4xl space-x-2 space-y-2 sm:flex-row md:flex-col">
            <Search />
            <div class="flex flex-row">
                <div class="flex-grow flex-shrink"></div>
                <button @click="goto_opac"
                   class="flex-shrink-0 rounded-full focus:outline-none focus:ring-4 focus:ring-red-800 focus:ring-opacity-90 focus:ring-offest-2 hover:ring-4 hover:ring-red-100 hover:ring-opacity-75 hover:ring-offest-2" 
                   aria-labelledby="patron-zone-login">
                   <div class="h-full px-4 py-2 font-sans font-semibold align-middle bg-red-600 rounded-full text-red-50">
                      <div id="dawinci-login-single" class="flex flex-row">
                          <span id="patron-zone-login" class="mr-2 align-middle">Konto čtenáře</span>
                          <icon-external-link/>
                      </div>
                   </div>
                </button>
            </div>
        </div>
      </div>
    </div>
    <hr role=separator class="sr-only">
      <MainNavigation />
    <hr role=separator class="sr-only">
  </header>
</template>

<style scoped>
/*
.hero {
  position: relative;
  /*background: transparent;* /
}
.hero::before {
  width: 100vw; height: 100%;
  position: absolute;
  content: "";
  background-image: 
    url('~@/@assets/images/bookshelf.svg'),
    url('~@/@assets/images/bookshelf-element.svg'),
    url('~@/@assets/images/bookshelf.svg');
  background-repeat: no-repeat, space, no-repeat;
  z-index: 2;
}
*/
</style>

<script>
import Search from '@/components/Search.vue';
import MainNavigation from './MainNavigation.vue'
import IconExternalLink from '@/components/icons/IconExternalLink'

export default {
  components : {
    Search,
    MainNavigation,
    IconExternalLink
  },
  computed: {
    description() {
      return this.$t('label.siteName.org') + ' ' + this.$t('label.siteName.loc');
    }
  },
  methods: {
    goto_opac() {
      if (this.$isServer) return;
      window.open("https://opacnew.rkka.cz/?fn=*login_userPswd&btnResName=ERR", "", ["noreferrer", "noopener"]);
    }
  }
}
</script>
