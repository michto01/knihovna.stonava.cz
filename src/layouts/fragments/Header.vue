<template>
  <header class="w-full dark:bg-coal-900 hero">
    <div class="px-2 mx-auto sm:py-3 max-w-7xl sm:px-6 lg:px-8 lg:py-6">
      <div class="flex flex-col items-center sm:flex-row justify-items-center">
        <div class="content-center rounded focus:outline-none wrapper-logo hover:ring-4 hover:ring-yellow-600 hover:ring-opacity-90 hover:ring-offest-2 focus-within:ring-4 focus-within:ring-yellow-600 focus-within:ring-opacity-75 focus-within:ring-offest-2">
          <a href="/" class="focus:outline-none">
            <div class="flex w-full h-full">
              <g-image class="w-1/3 h-full" width="120" height="120" src="~/@assets/images/knihovna-stonava-logo.svg" alt="Logo" />
              <div class="flex-grow leading-none">
                <p class="flex flex-col justify-center h-full">
                  <span class="inline font-sans text-base font-bold sm:block sm:text-2xl text-coal-700">Místní knihovna&nbsp;</span>
                  <span class="text-coal-800 font-bold sm:text-xl text-sm;">Stonava</span>
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="flex-grow flex-shrink hero"></div>
        <div class="flex flex-col justify-end max-w-4xl gap-1 md:gap-2 sm:flex-row md:flex-col">
            <Search />
            <div class="flex flex-row">
                <div class="flex-grow flex-shrink"></div>
                <button @click="goto_opac"
                   class="flex-shrink-0 rounded focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-75 focus:ring-offest-2 hover:ring-4 hover:ring-red-100 hover:ring-opacity-75 hover:ring-offest-2" 
                   aria-labelledby="patron-zone-login">
                   <div class="h-full p-1.5 font-sans font-semibold align-middle bg-red-600 rounded text-red-50">
                      <div id="dawinci-login-single" class="flex flex-row">
                          <span id="patron-zone-login" class="mr-2 align-middle">Konto čtenáře</span>
                          <svg role="presentation" width="1em" height="1em" class="inline w-6 h-6 text-center text-red-300 align-middle" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                          </svg>
                      </div>
                   </div>
                </button>
            </div>
        </div>
      </div>
    </div>
    <hr role=separator class="sr-only">
      <MainNavigation />
    <hr class="sr-only">
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

export default {
  components : {
    Search,
    MainNavigation
  },
  methods: {
    goto_opac() {
      if (this.$isServer) return;
      window.open("https://opacnew.rkka.cz/?fn=*login_userPswd&btnResName=ERR", "", ["noreferrer", "noopener"]);
    }
  }
}
</script>
