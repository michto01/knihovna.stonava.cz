<!--template>
  <div class="max-w-2xl mx-auto p-4">
    <header class="flex justify-between">
      <strong>
        <g-link
          class="font-semibold mr-2 hover:underline"
          to="/"
        >{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link
          class="font-semibold mr-2 hover:underline"
          to="/"
        >
          Home
        </g-link>
        <g-link
          class="font-semibold mr-2 hover:underline"
          to="/about/"
        >
          About
        </g-link>
      </nav>
    </header>
    <main class="mt-8">
      <slot />
    </main>
  </div>
</template-->

<template>
  <Layout>
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1 class="text-gray-900 dark:text-white font-bold font-lg">Hello, world!</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Pariatur excepturi labore tempore expedita, et iste tenetur
      suscipit explicabo! Dolores, aperiam non officia eos quod asperiores.
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
