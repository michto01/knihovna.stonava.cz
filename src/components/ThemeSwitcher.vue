<template>
  <div>
    <span class="sr-only">{{ $t('label.styles.active') }}: </span>
    <button @click.prevent="toggleTheme">
      <div class="text-gray-400 dark:text-white">
        <svg role="img" width="1em" height="1em" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"  clip-rule="evenodd">
          <path v-if="theme=='light'" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"></path>
          <path v-else-if="theme=='dark'" d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          <path v-else d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"></path>
        </svg>
        <label class="sr-only">&nbsp;{{ $t(`label.styles.${theme}`) }}</label>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
  methods: {
    nextTheme (current) {
      const options = ['light', 'native', 'dark'];
      const next = (options.indexOf(current) + 1) % options.length;
      return options[next];
    },
    toggleTheme () {
      this.$emit('themeChanged', this.nextTheme(this.theme))
    },
  },
}
</script>
