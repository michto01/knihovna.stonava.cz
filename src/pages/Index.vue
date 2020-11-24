<template>
  <Layout>
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1 class="font-bold text-gray-900 dark:text-white font-lg">Hello, world!</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Pariatur excepturi labore tempore expedita, et iste tenetur
      suscipit explicabo! Dolores, aperiam non officia eos quod asperiores.
    </p>

    <h1 class="text-2xl font-semibold">Přihlášení do knihovny</h1>
    <p>Prosím vyplňte své přihlašovací údaje do katalogu </p>
    <PatronLogin-Dawinci />

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
  </Layout>
</template>

<script>
import PatronLoginDawinci from '../components/PatronLoginDawinci.vue'

export default {
  components: {
    PatronLoginDawinci,
  },
  metaInfo: {
    title: 'Knihovna Stonava'
  }
}
</script>
