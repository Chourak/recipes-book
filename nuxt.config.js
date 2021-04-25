export default {
  layoutTransition: 'fade',
  // ENV
  publicRuntimeConfig: {
    strapiURL: process.env.STRAPI_URL || 'http://192.168.1.22:1337',
    baseURL: process.env.BASE_URL || 'http://192.168.1.22:3000',
  },
  server: {
    host: '192.168.1.22',
    port: 3000,
  },
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  loading: {
    color: 'blue',
    height: '5px',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'e-paupiette',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/slugify.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-graphql-request',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-client-init-module',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    // '@nuxtjs/apollo',
    'vue-screen/nuxt',
    '@nuxtjs/strapi',
    'svg-to-vue-component/nuxt',
    '@nuxtjs/toast',
  ],

  strapi: {
    url: process.env.STRAPI_URL || 'http://192.168.1.22:1337',
    entities: ['recettes'],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  styleResources: {
    scss: ['./assets/*.scss'],
  },

  /* apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://192.168.1.22:1337/graphql', // Example url
      },
    },
    defaultOptions: {
      // See 'apollo' definition
      // For example: default query options
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'no-cache',
      },
    },
  }, */

  graphql: {
    /**
     * An Object of your GraphQL clients
     */
    clients: {
      default: {
        /**
         * The client endpoint url
         */
        endpoint: 'http://192.168.1.22:1337/graphql',
        /**
         * Per-client options overrides
         * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
         */
        options: {},
      },
      secondClient: {
        // ...client config
      },
      // ...your other clients
    },

    /**
     * Options
     * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
     */
    options: {},

    /**
     * Optional
     * default: true (this includes cross-fetch/polyfill before creating the graphql client)
     */
    useFetchPolyfill: false,

    /**
     * Optional
     * default: false (this includes graphql-tag for node_modules folder)
     */
    includeNodeModules: false,
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.scss',
    exposeConfig: true,
  },
  jit: true,

  pwa: {
    icon: false,
    workbox: {
      enabled: false,
      runtimeCaching: [
        {
          urlPattern: 'https://fonts.googleapis.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
        },
        {
          urlPattern: 'https://fonts.gstatic.com/.*',
          handler: 'cacheFirst',
          method: 'GET',
          strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
        },
      ],
    },
  },

  toast: {
    position: 'top-center',
    theme: 'bubble',
    duration: 2500,
  },
}
