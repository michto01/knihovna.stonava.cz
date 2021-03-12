<template>
  <Layout>
    <div class="max-w-4xl p-2 mx-auto sm:p-4 lg:p-16">
      <article class="wrapper">
        <h1 class="pt-4 text-2xl font-black md:text-3xl lg:text-5xl">Kontakty</h1>
        <h2 class="pb-4 text-xl font-semibold md:text-2xl lg:text-2xl">Na koho a jak se můžete obracet</h2>
        <div class="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
          <div>
            <div>Tomáš Michalek</div>
            <div>knihovník</div>
            <div>tomas.michalek@knihovna.stonava.cz</div>
          </div>
          <div>
            <div>Danuta Sobocik</div>
            <div>vedoucí knihovny</div>
            <div>danuta.sobocikova@knihovna.stonava.cz</div>
          </div>
        </div>
      </article>
    </div>
  </Layout>
</template>

<style scoped>
p {
  @apply pb-1;
  @apply dark:text-white;
}
</style>

<script>
export default {
  metaInfo: {
    title: 'Kontakt'
  }
}
</script>
