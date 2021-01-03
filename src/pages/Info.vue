<template>
  <Layout class="">
      <div class="bg-coal-100 -z-10">
        <div class="max-w-4xl p-4 mx-auto lg:p-16">
            <h1 class="pt-4 text-2xl font-black md:text-3xl lg:text-5xl">Právní náležitosti</h1>
            <h2 class="pb-4 text-xl font-semibold md:text-2xl lg:text-2xl">Směrnice, kterými se řídí tyto webové stránky.</h2>
            <div class="flex flex-col">
                <div
                    v-for="info in localizedInfo"
                    :key="info.node.slug"
                    class="m-2 space-x-4 space-y-4 duration-200 ease-in-out rounded-lg motion-safe:transform hover:-translate-y-1"
                >
                    <div class="p-4 bg-white rounded-lg shadow-md hover:shadow-xl">
                        <a class="pb-4 font-bold hover:underline" :href="'/' + info.node.lang + '/info/' + info.node.slug">{{info.node.title}}</a>
                        <div class="pt-2">{{info.node.description}}</div>
                        <br class="sr-only" />
                    </div>
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
