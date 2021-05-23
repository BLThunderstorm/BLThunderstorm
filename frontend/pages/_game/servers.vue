<template>
    <div class="marginish-page-container">
        <div class="marginish-page">
            <div class="server-list">
                <div v-for="server in servers" class="server" :map="server.map" :image="server.image" :style="server.customCSS"  :key="server.guid">
                    <div class="title">
                        {{ server.name }}
                    </div>
                    <div>
                    {{ `${maps[server.map] || server.map} - ${(server.country || "IDK").toUpperCase()} - ${server.tickRate} ticks` }}
                    </div>
                </div>
                <div v-if="!servers || !servers.length">

                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        head(){
            return {title: "Servers"}
        },

        async asyncData({ $client, params }){

        let maps = {};

        try {
            maps = await import(`~/assets/maps.json`);
        } catch {

        }
         let servers = Array.from(await $client.fetchServers());

        servers = servers.map((s) => {
            s = JSON.parse(JSON.stringify(s[1]));

            if(params.game === "bf3"){
               s.image = Math.floor((Math.random() * 3) + 1);
               s.customCSS = `background-image: url("https://gitcdn.xyz/repo/BLThunderstorm/Map-Images/master/${s.map}/0${s.image}.jpg");`;
            }

            return s;
        })

        return {servers, maps};
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
