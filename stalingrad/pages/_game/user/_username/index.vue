<template>
  <div v-if="user" class="user-page">
    <div class="user-wallpaper user-page-content">
      <img
        :src="user.staticAvatarURL"
      />
      <div>
        <div>
          <div>{{ user.user?.username }}</div>
        </div>
      </div>

      <div class="user-page-content">
        <div v-if="user.readme" v-html="user.readme"></div>
      </div>

      <div class="user-page-content user-soldiers">
        <div class="soldier-box" v-for="soldier in user.soldiers">
          <NuxtLink :to="soldier.url">
            <div class="soldier-text soldier-content">
              <div class="title">
                {{
                 soldier.displayName
                }}
              </div>
              <div  class="text">
                {{ `${soldier.gameName} - ${soldier.platformName}` }}
              </div>
            </div>
            <div class="soldier-portrait soldier-content"></div>
          </NuxtLink>
        </div>
      </div>

      <div class="user-page-content friends-box">
        <div>Friends</div>
        <div class="friends-list">
          <div v-for="friend in user.friends"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// @ts-ignore
import { User } from "battlelog.js/src/classes/user.ts";
import { NuxtError } from "@nuxt/types";
import * as games from "~/assets/blassets/games.json";
import * as platforms from "~/assets/blassets/platform-inv.json";
import * as bf4cdn from "@nefomemes/blscraps-strings/bf4_cdn.json";
import getPortrait from "~/assets/utils/getportrait";
import Component from "vue-class-component";
import Vue from "vue";

Component({});
export default class BattlelogUserPage extends Vue {
  data() {
    return { user: undefined, error: undefined };
  };

  user: User = {};
  async asyncData(ctx) {
    try {
      let user = await ctx.$client.fetchUser(ctx.params.username);
      if (user) {
        console.log(user);
        user.readme = await ctx.$markdown(user.userinfo.presentation);
        user.staticAvatarURL = `https://gravatar.com/avatar/${user.gravatarMd5}?r=pg&d=retro`;
        let gameInverted = {};
        Object.entries(games).map(([game, id]) => {
          gameInverted[id] = game;
        });

        for (let soldier of user.soldiers) {
          soldier.platformName = platforms[soldier.platform];
          soldier.gameName = gameInverted[soldier.game];
          soldier.soldierPic = getPortrait(
            soldier.game,
            soldier.persona.picture
          );
          soldier.url = `/${soldier.gameName.toLowerCase()}/user/${
            user.user.username
          }/soldier/${soldier.persona.personaId}`;
          soldier.displayName =  (soldier.persona.clanTag
                    ? `[${soldier.persona.clanTag}]`
                    : "") + (soldier.persona.personaName || user.user.username);
        }

        user = JSON.parse(JSON.stringify(user));
        return { user, error: false };
      };
    } catch (error) {
      console.error(error);
      ctx.error(<NuxtError>{ status: 500, message: error.stack });
      return { error, user: null };
    };
  };
  head() {
    return {
      title: this.user.user.username || "User not found",
    };
  }
  methods = {
    userify(user: User) {
      let userified = new User(this.$client, user);
      return userified;
    },
  };
};
</script>
<style lang="scss">
.user-readme {
  background-color: #121212;
  width: 100%;
}

.user-soldiers,
.friends-bar {
  background-color: #303030;
}

.friends-bar {
  display: flex;
  flex-direction: column;
}
.soldier-box {
  position: relative;
  height: 150px;
}

.soldier-content {
  position: absolute;
}

.soldier-text {
  z-index: 5;
  top: 30px;
  left: 30px;
}

.soldier-portrait {
  z-index: 4;
  width: 100%;
  height: 100%;
}

.content-order-container,
.user-readme {
  padding: 20px;
}

.content-order-container .content-order {
  display: flex;
}

#box-error {
  width: calc(100% - 80px);
  text-align: center;
}

#user-page {
  position: relative;
}

.user-wallpaper-content {
  padding: 20px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.user-username-box {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.user-page-content {
  margin-bottom: 20px;
}

.user-wallpaper {
  background-color: black;
  color: white;
  width: 100%;
  position: relative;
  height: 150px;
}
.user-name {
  font-weight: 600;
  font-size: 35px;
}

.soldier-box {
  width: 330px;
  height: 330px;
}

.user-soldiers {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.user-soldiers,
.friends-bar {
  background: #121212;
}

.friends-bar .content-order {
  flex-wrap: wrap;
}

.friends-bar .friend-box {
  margin-right: 10px;
}
</style>
