const cz = [
  {
    path: '/',
    component: './src/pages/Index.vue'
  },
  {
    path: '/o-knihovne/',
    component: './src/pages/About.vue'
  },
  {
    path: '/info',
    component: './src/pages/Info.vue'
  }
]

const pl = [
  {
    path: '/',
    component: './src/pages/Index.vue'
  },
  {
    path: '/o-bibliotece/',
    component: './src/pages/About.vue'
  },
  {
    path: '/info',
    component: './src/pages/Info.vue'
  }
]

module.exports = {
  'cs-CZ': [
    ...cz,
    ...cz.map(r => {
      r.path = '/cs' + r.path
      return r
    })
  ],
  'pl-CZ': [
    ...pl.map(r => {
      r.path = '/pl' + r.path
      return r
    })
  ]
};