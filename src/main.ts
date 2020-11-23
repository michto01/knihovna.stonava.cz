// Types imports
import { ClientApiConstructor } from './types';

// CSS
import '~/global.css';

// Layout imports
import DefaultLayout from '~/layouts/Default.vue';
import PortalVue from 'portal-vue';


const client: ClientApiConstructor = (Vue, { head }) => {
  Vue.component('Layout', DefaultLayout);
  Vue.use(PortalVue);
  
  head.bodyAttrs = {
    class: 'leading-normal antialiased overflow-x-hidden overflow-y-scroll',
    style: 'overscroll-behavior-x: none;'
  };
  head.htmlAttrs = {
    class: 'bg-blue-900',
    id: 'main-theme'
  };
  head.bodyAttrs = {
    class: ''
  };

  head.meta?.push({
    name: 'keywords',
    content:
      'Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS',
  })

  head.meta?.push({
    name: 'description',
    content: 'Gridsome Portfolio Starter',
  })

  head.meta?.push({
    name: 'author',
    content: 'Místní knihovna Stonava',
  })
};

export default client;