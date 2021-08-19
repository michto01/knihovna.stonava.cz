<template>
    <a rel="license" :href="link" class="block py-1">
        <div class="flex flex-row justify-center space-x-1">
          <g-image
            alt="Licence Creative Commons"
            :class="aSize"
            :width="aSizeInplace"
            :height="aSizeInplace"
            src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" />

          <g-image
            alt="Licence Creative Commons - Atribute"
            :class="aSize"
            :width="aSizeInplace"
            :height="aSizeInplace"
            src="https://mirrors.creativecommons.org/presskit/icons/by.svg" />

          <g-image
            alt="Licence Creative Commons - Share Alike"
            :class="aSize"
            :width="aSizeInplace"
            :height="aSizeInplace"
            src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" />
        </div>
    </a>
</template>

<script>
export default {
    props: {
        lang: {
            type: String,
            default: 'cs'
        },
        size: {
            type: Number,
            default: 6
        },
        size_inplace: {
            type: Number,
            default: 1
        }
    },
    computed: {
        aSize : function () {
            return `w-${this.size} h-${this.size}`;
        },
        aSizeInplace: function () {
            return `${this.size_inplace}rem`;
        },
        link: function () {
            return `http://creativecommons.org/licenses/by-sa/4.0/deed.${this.lang}`;
        }
    }
}
</script>