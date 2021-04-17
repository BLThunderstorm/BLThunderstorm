import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - BLThunderstorm',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  	'~/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
<<<<<<< HEAD
=======
    "~/plugins/bl.js"
>>>>>>> frontend/master
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
<<<<<<< HEAD
=======
    '@nuxt/typescript-build'
>>>>>>> frontend/master
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  	'@nuxtjs/axios',
<<<<<<< HEAD
=======
	    '@nuxtjs/pwa',
>>>>>>> frontend/master
    '@nuxtjs/auth-next'
  ],
  auth: {
  strategies: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    },

  },
    watchLoggedIn: true
},


  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
<<<<<<< HEAD
    customVariables: ['~/assets/variables.scss'],
=======
    customVariables: ['~/assets/variables.sass'],
>>>>>>> frontend/master
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
<<<<<<< HEAD

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
=======
 typescript: {
  
    typeCheck: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
 /* extend (config, ctx) {
      config.resolve.symlinks = false
    },
  rules: [ 	{
    test: /\.s(c|a)ss$/,
    use: [
      'vue-style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        // Requires sass-loader@^7.0.0
     /*   options: {
          implementation: require('sass'),
          fiber: require('fibers'),
          indentedSyntax: true // optional
        },*/
        // Requires sass-loader@^8.0.0 
     /*   options: {
          implementation: require('sass'),
          sassOptions: {
            fiber: require('fibers'),
            indentedSyntax: true // optional
          },
        },
      },
    ],
  },] */
  
>>>>>>> frontend/master
  },
  server: {
  	host: "0.0.0.0"
  }
}
