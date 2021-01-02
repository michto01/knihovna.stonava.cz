<template>
  <Layout class="">
      <div class="max-w-4xl p-4 mx-auto md:p-8">
        <div class="prose">
            <h1 class="article-title">Právní náležitosti</h1>
        </div>
        <div class="flex flex-col">
            <div
                v-for="info in localizedInfo"
                :key="info.node.slug"
                class="m-2 space-x-4 space-y-4 rounded-lg"
            >
                <div class="p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl">
                    <a class="pb-4 font-bold hover:underline" :href="'/' + info.node.lang + '/info/' + info.node.slug">{{info.node.title}}</a>
                    <div class="pt-2">{{info.node.description}}</div>
                    <br class="sr-only" />
                </div>
            </div>
        </div>
      </div>
  </Layout>
</template>

<style scoped>
</style>

<static-query>
query {
    info: allInfo {
        edges {
            node {
                locale
                lang
                title
                slug
                description
                keywords
            }
        }
    }
}
</static-query>

<script>
export default {
    computed: {
        localizedInfo() {
            return this.$static.info.edges.filter(x => x.node.locale == this.$i18n.locale)
        }
    },
    metaInfo() {
        return {
            title: this.$static.info.title,
            description: this.$static.info.description,
            keywords: this.$static.info.keywords
        }
    }
}
</script>
