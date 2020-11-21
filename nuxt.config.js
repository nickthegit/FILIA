import { createSEOMeta } from './utils/seo'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static', // also could ber server
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Filia',
    meta: [
      ...createSEOMeta({
        title: 'Filia',
        description:
          'insert description here',
        image: '[Insert_NarutoDose_Image_URL]',
        url: process.env.HOST_NAME,
      }),
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    MC_UID: process.env.MC_UID,
    MC_AUDIENCE_ID: process.env.MC_AUDIENCE_ID,
    MC_LIST_NAME: process.env.MC_LIST_NAME
  },
  /*
  ** Global CSS
  */
  css: ['@/assets/scss/_all.scss'],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/toast',
  ],
  toast: {
    position: 'bottom-left',
    duration: 3000,
    register: [],
    singleton: false
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  sitemap: {
    hostname: process.env.HOST_NAME,
    exclude: [
      '/404',
      '/error',
      // '/admin/**'
    ],
    // routes: async () => {
    // const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    // return data.map((user) => `/users/${user.username}`)
    // }
    // options
  },
  styleResources: {
    scss: [
      './assets/scss/_variables.scss', // use underscore "_" & also file extension ".scss"
      './assets/scss/_mediaquery.scss'
    ]
  },
  generate: {
    fallback: true
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    transpile: ['gsap'],
  },
}
