<template>
    <div class="marginish-page-container">
        <div class="marginish-page">
            <div class="server-list">
                <div v-for="server in servers" class="server" :map="server.map" :image="server.image" :style="server.customCSS"  :key="server.guid">
                    <div>
                        {{ server.name }}
                    </div>
                    <div>
                    <div class="title">
                        Map
                    </div>
                    <div>
                        {{ maps[server.map] }}
                    </div>
                    </div>
                </div>
                <div v-if="!server || !server.length">

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

            params.game = params.game.toLowerCase();
         let bf = $client.game(params.game);

         let servers = Array.from(await bf.fetchServers());

        servers = servers.map((s) => {
            s = JSON.parse(JSON.strigify(s[1]));

            if(params.game === "bf3"){
               s.image = Math.floor((Math.random() * 3) + 1);
               s.customCSS = `background-image: url("https://raw.githubusercontent.com/kaloczikvn/VU-Loading-Images/master/${s.map}/${s.image}.jpg");`;
            }

            return s;
        })

        return {servers};
        }

    }
</script>
<style lang="sass">

.server
 height: 200px
 width: 100%
 background-size: cover
 background-position: 50%

.server-list
 display: flex
 flex-direction: column

    </style>
