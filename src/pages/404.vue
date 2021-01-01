<template>
    <div class="flex items-center min-h-screen text-white gradient">
    <div class="container flex flex-wrap items-center p-4 mx-auto">
        <div class="w-full p-4 text-center md:w-5/12">
        <!--img src="$" alt="Not Found" /-->
        <g-image src="~/@assets/images/oksmith-screech-owl.svg" class="w-1/2 mx-auto sm:w-full lg:p-8" width="120" height="120" alt=""/>
        </div>
        <div class="w-full p-4 text-center md:w-7/12 md:text-left">
        <div class="text-6xl font-bold">404</div>
        <div class="mb-4 text-xl font-medium md:text-3xl">
            {{ $t('label.404.title') }}
        </div>
        <div class="mb-8 text-lg">
            {{ $t('label.404.claim') }}
        </div>
        <a :href="homeLink" class="p-4 border border-white rounded">{{ $t("label.404.home") }}</a>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            homeLink: '/'
        }
    },
    mounted () {
        const re = /^\/(.{2})\//;
        const locales = this.$i18n.availableLocales
        const locale = window.location.pathname.match(re)[1];
        this.$i18n.locale = locales.filter(x => x.split('-')[0] == locale)[0];
        this.homeLink = this.$tp('/', this.$i18n.locale, true);
    }
}
</script>

<style scoped>
.gradient {
    background-image: linear-gradient(135deg, #684ca0 35%, #1c4ca0 100%);
}
</style>