<template>
    <div class="flex flex-row space-x-2 duration-150 ease-in-out rounded-md shadow-sm w-max-7xl bg-coal-50 sm:transform motion-reduce:transform-none hover:shadow-md hover:-translate-y-1">
        <div class="content-center bg-indigo-800 sm:w-1/4 rounded-l-md h-max">
            <div class="flex p-2 m-auto bg-indigo-600 rounded-lg">
                <!-- Heroicon name: speakerphone -->
                <svg role="img" width="1em" height="1em" class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
            </div>
        </div>
        <article class="flex flex-col p-4 sm:w-3/4">
            <header>
                <div v-if="date" class="pb-1">
                    <div class='p-1 text-xs font-semibold text-white bg-indigo-400 border rounded w-min'><time :datetime="date">{{ dateCreated }}</time></div>
                </div>
                <g-link :to="link">
                    <h1 class="pb-2 text-xl font-extrabold">{{ title }}</h1>
                </g-link>
            </header>
            <p class="pb-2 text-md">{{ abstract }}</p>
            <footer class="self-end">
                <g-link class="p-2 text-sm font-extrabold text-right bg-indigo-700 rounded hover:bg-indigo-500 hover:text-white text-indigo-50" :to="link">{{ $t('label.read-more') }} &rarr;</g-link>
            </footer>
        </article>
    </div>
</template>

<script>
import day from 'dayjs';
import Footer from '~/layouts/fragments/Footer.vue';

export default {
    components: { Footer },
    props: [
        'date',
        'title',
        'abstract',
        'link'
    ],
    computed: {
      dateCreated () {
        const time = this.date
        if (!time) return;
        return day(time).format('DD.MM.YYYY');
      }
  }
}
</script>

<style scoped>

</style>