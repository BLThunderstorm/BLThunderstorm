import bljs from "battlelog.js/src/index.js";
import type { Plugin } from '@nuxt/types'
/*
declare module 'vue/types/vue' {
  // this.$myInjectedFunction inside Vue components
  interface Vue {
    $client:  
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $myInjectedFunction(message: string): void
  }
  // nuxtContext.$myInjectedFunction
  interface Context {
    $myInjectedFunction(message: string): void
  }
}

declare module 'vuex/types/index' {
  // this.$myInjectedFunction inside Vuex stores
  interface Store<S> {
    $myInjectedFunction(message: string): void
  }
}

const myPlugin: Plugin = (context, inject) => {
  inject('myInjectedFunction', (message: string) => console.log(message))
}

export default myPlugin
*/
export default function ({ params, $bljs, $client, $blclient }, inject) {
  if (!$bljs) {
    $bljs = bljs;
    inject("bljs", $bljs);
  }
  if (!$blclient) {
    $blclient = bljs();
 
    inject("blclient", $blclient);
  }
  if (params.game && (!$client || $client.game !== params.game)) {
    inject("client", $blclient.game(params.game));
  }
}
