<template>
  <Layout>
    <div class="w-full">
        <article class="max-w-4xl px-2 mx-auto prose lg:prose-md sm:px-6 lg:px-8 lg:py-6">
            <h1 v-html="$page.info.title" />
            <div v-html="$page.info.content" />
        </article>
    </div>
  </Layout>
</template>

<script>
export default {
}
</script>

<page-query>
query ($id: ID!) {
  info(id: $id) {
    title
    content
  }
}
</page-query>

<!--style>
</style-->