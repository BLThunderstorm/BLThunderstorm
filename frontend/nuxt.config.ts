import type { NuxtConfig } from "@nuxt/types";

declare let process: {
  env: {
    HOST?: string;
    GITHUB_CLIENT_ID: string;
    PORT?: string;
    GITHUB_CLIENT_SECRET?: string;
    VITE?: boolean;
  };
};

const config: NuxtConfig = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - BLThunderstorm",
    htmlAttrs: { lang: "en" },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/bl.ts", "~/plugins/nfm.ts"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended):
  // https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/typescript-build",
    ...(process.env.VITE ? ["nuxt-vite"] : []),
    "@nuxtjs/vuetify",
  ],
  vuetify: {
    optionsPath: "~/vuetify.config.ts"
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/auth-next",
    "@nuxtjs/style-resources",
  ],
  auth: {
    strategies: {
      github: {
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      },
    },
    watchLoggedIn: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      babelrc: true,
    },

  },
  server: { host: process.env.HOST, port: process.env.PORT },
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },

  styleResources: {
    scss: ["~/assets/theme.scss"],
  },
};

export default config;
