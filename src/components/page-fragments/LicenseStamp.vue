<template>
  <div class="flex flex-col">
      <creative-commons-icons :size='6' :lang='aLang' />
      <p>
        <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">{{ entity }}</span>{{ authorship }}
        <a xmlns:cc="http://creativecommons.org/ns#" href="https://knihovna.stonava.cz" property="cc:attributionName" rel="cc:attributionURL">{{ organisation }}</a>{{ underLicense }}
        <a rel="license" :href="'http://creativecommons.org/licenses/by-sa/4.0/deed.' + aLang">{{ license }}</a>.
      </p>
      <p>
        {{ organisation }} &copy; 2020-{{new Date().getFullYear()}}.
        {{ copyright }}
      </p>
  </div>
</template>

<script>
import CreativeCommonsIcons from '../icons/CreativeCommonsIcons.vue'
export default {
    props: {
        lang: {
            type: String,
            default: 'cs'
        },
        organisation: {
            type: String,
            default: 'Knihovna'
        },
        entity: {
            type: String,
            default: 'Webové stránky'
        },
        authorship: {
            type: String,
            default: ', jejiž autorem je'
        },
        underLicense: {
            type: String,
            default: ', podléhají licenci'
        },
        license: {
            type: String,
            default: 'Creative Commons Uveďte původ 4.0 Mezinárodní'
        },
        copyright: {
            type: String,
            default: 'Některá práva vyhrazena.'
        }
    },
    computed: {
        aLang: function () {
            return `${this.lang}`;
        }
    },
    components: { CreativeCommonsIcons },

}
</script>