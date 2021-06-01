// @ts-ignore
import { BattlelogClient } from "battlelog.js/src/classes/blclient.ts";
// @ts-ignore
import type { GameClient } from "battlelog.js/src/classes/gameclient.ts";
import type { Plugin } from '@nuxt/types'
// @ts-ignore 
import type { SupportedGames } from "battlelog.js/src/types/games.ts";

declare module 'vue/types/vue' {
  // this.$myInjectedFunction inside Vue components
  interface Vue {
    $blclient: BattlelogClient
    $client: GameClient
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $blclient: BattlelogClient
    $client: GameClient
  }
  // nuxtContext.$myInjectedFunction
  interface Context {
    $blclient: BattlelogClient
    $client: GameClient
  }
}

const plugin: Plugin = function ({ params, $client, $blclient }, inject) {

  if (!$blclient) {
    $blclient = new BattlelogClient();
 
    inject("blclient", $blclient);
  }
  if (params.game && (!$client || $client.game !== params.game)) {
    inject("client", $blclient.game(<SupportedGames>params.game));
  }
}

export default plugin;