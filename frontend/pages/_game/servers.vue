<template>
    <div class="marginish-page-container">
        <div class="marginish-page">
            <div class="server-list">
                <div v-for="server in servers" 
                    :key="server.guid"
                     class="server"  
                     :map="server.map" 
                     :image="server.image" 
                     :style="server.customCSS"  
                     >
                    <div class="title">
                        {{ server.name }}
                    </div>
                    <div>
                     {{ `${s.mapName} - ${(server.country || "IDK").toUpperCase()} - ${server.tickRate} ticks` }}
                    </div>
                </div>
                <div v-if="!servers || !servers.length">

                </div>

            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue  from "vue";/*
import * as maps from "@blscraps/core";
*/
import  Component  from "vue-class-component";
import type { Server } from "battlelog.js/src/index";
import * as maps from "@nefomemes/blscraps-strings/maps.json";

@Component({})
export default class BLServers extends Vue {
        head() : { title: string } {
            return {title: "Servers"}
        }; 

        async asyncData(ctx) : Promise<{servers: Array<Server>}> {

         let servers: Array<Server> = Array.from(await ctx.$client.fetchServers());

        servers = servers.map((rawS) => {
            /* eslint-disable prefer-const */
            let s = JSON.parse(JSON.stringify(rawS[1]));
            s.mapName = maps[ctx.$client.game][s.map] || s.map;
            if(ctx.params.game === "bf3"){
               s.image = Math.floor((Math.random() * 3) + 1);
               s.customCSS = `background-image: url("https://gitcdn.xyz/repo/BLThunderstorm/Map-Images/master/${s.map}/0${s.image}.jpg");`;
            }

            return s;
        })

        return {servers};
        }

    }
</script>
<style lang="sass">

.server
 height: auto
 padding: 10px
 width: 100%
 background-size: cover
 background-position: 50%

.server-list
 display: flex
 flex-direction: column

    </style>
