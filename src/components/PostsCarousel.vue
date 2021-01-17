<template>
    <div class="flex flex-col justify-center w-10/12 mx-auto">
        <div class="relative flex flex-row">
            <div class="absolute inset-y-0 left-0 z-10 flex items-center">
                <button v-on:click="prevSlide()"
                        class="flex items-center justify-center w-10 h-10 -ml-2 bg-white rounded-full shadow lg:-ml-4 focus:outline-none">
                <svg viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 chevron-left"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                </button>
            </div>

            <div class="swiper-container">
                <div class="swiper-wrapper">
                <!-- Slides -->
                    <div class="p-4 swiper-slide" v-for="i in 5" :key="i">
                        <div class="flex flex-col overflow-hidden rounded shadow">
                        <div class="flex-shrink-0">
                            <div>{{ i }}</div>
                            <img class="object-cover w-full h-48" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="">
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="absolute inset-y-0 right-0 z-10 flex items-center">
                <button @click="nextSlide()" class="flex items-center justify-center w-10 h-10 -mr-2 bg-white rounded-full shadow lg:-mr-4 focus:outline-none">
                    <svg viewBox="0 0 20 20" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="w-6 h-6 chevron-right"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path></svg>
                </button>
            </div>

        </div>
        <div class="self-center swiper-pagination-custom"></div>
    </div>
</template>

<script>
import Swiper from 'swiper/bundle';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/a11y/a11y.min.css';
import 'swiper/components/controller/controller.min.css';

var swiper = null;

export default {
    mounted () {
        swiper = this.createSwiper();
    },
    methods: {
        createSwiper () {
            return new Swiper('.swiper-container', {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 0,

                pagination: {
                    el: '.swiper-pagination-custom',
                    clickable: true
                },

                coverflowEffect: {
                    rotate: 0,
                    stretch: 10,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                },

                breakpoints: {
                    640:  { slidesPerView: 1, spaceBetween: 0 },
                    768:  { slidesPerView: 2, spaceBetween: 0 },
                    1024: { slidesPerView: 3, spaceBetween: 0 },
                },
            });
        },
        nextSlide () {
            swiper.slideNext();
        },
        prevSlide () {
            swiper.slidePrev();
        }
    }
}
</script>

<style lang="scss" scoped>
.swiper-pagination-custom > .swiper-pagination-bullet {
    width: 1rem;
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    font-size: 0.7rem;
    color: #000;
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);

    &-active {
        color: #fff;
        background: red !important;
    }
}
</style>