// Types imports

// CSS
import '~/@assets/global.css';

// Layout imports
import DefaultLayout from '~/layouts/Default.vue';
import PortalVue from 'portal-vue';
import VueHotkey from 'v-hotkey';

export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.component('Layout', DefaultLayout);
  Vue.use(PortalVue);
  Vue.use(VueHotkey);

  router.options.linkActiveClass = 'is-active';
  router.options.linkExactActiveClass = 'is-exact';

  if (isClient) {
    appOptions.i18n.setLocaleMessage('cs-CZ', require('./locales/cs'));
    appOptions.i18n.setLocaleMessage('pl-CZ', require('./locales/pl'));
  }

  head.bodyAttrs = {
    class: 'leading-normal antialiased overflow-x-hidden overflow-y-scroll',
    style: 'overscroll-behavior-x: none;'
  };
  head.htmlAttrs = {
    class: 'bg-indigo-900',
    id: 'main-theme'
  };

  [
    {
      name: 'keywords',
      content: 'Knihovna,Stonava,Místní knihovna,KAG515,Dolany,Půjčování knih,OPAC,Regionální knihovna Karviná',
    },
    {
      name: 'description',
      content: 'Webové stránky knihovny ve Stonavě',
    },
    {
      name: 'author',
      content: 'Místní knihovna Stonava',
    }
  ].forEach(meta => {
    head.meta?.push(meta)
  });
};

