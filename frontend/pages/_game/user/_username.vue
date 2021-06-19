<template>
  <div>
    <div v-if="user" class="user-page">
      <div class="user-wallpaper user-page-content">
        <div class="user-wallpaper-content">
          <div class="user-username-box">
            <p class="user-name title">
              {{ user.user.username }}
            </p>
          </div>
          <img
            v-bind:src="userify(user).displayAvatarURL({ size: 2048 })"
            class="user-avatar-image"
          />
        </div>
      </div>

      <div id="user-presentation" class="user-page-content">
        <div class="marginish-page-container">
          <div class="marginish-page">
            <div v-if="user.readme">
              <div class="user-readme" v-html="user.readme"></div>
            </div>
            <div class="user-soldiers">
              <div
                v-for="soldier in user.soldiers"
                :key="soldier.persona.personaId"
                class="soldier-box"
              >
                <div class="soldier-text soldier-content">
                  <div class="title">
                    {{
                      (soldier.persona.clanTag
                        ? "[" + soldier.persona.clanTag + "] "
                        : "") +
                      (soldier.persona.personaName || user.user.username)
                    }}
                  </div>
                  <p class="soldier-info">
                    {{ `${soldier.gameName} - ${soldier.platformName}` }}
                  </p>
                </div>
                <div
                  class="soldier-portrait soldier-content"
                  :style="
                    soldier.soldierPic
                      ? `background-image: url('${soldier.soldierPic}')`
                      : ''
                  "
                ></div>
              </div>
            </div>
            <div class="friends-bar content-order-container user-page-content">
              <div class="title">Friends</div>

              <div class="content-order">
                <div v-for="friend in user.friends" :key="friend.user.userId">
                  <a
                    ><v-avatar size="48"
                      ><img
                        :src="
                          userify(friend).displayAvatarURL({ size: 128 })
                        " /></v-avatar
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="error" id="error-page">
        <div id="box-error">
          <h1>
            {{ error.toString() }}
          </h1>
          <h2>
            {{ error.stack }}
          </h2>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// @ts-ignore
import { User } from "battlelog.js/src/classes/user.ts";
import { NuxtError } from "@nuxt/types";
import * as games from "@nefomemes/blscraps-strings/games.json";
import * as platforms from "@nefomemes/blscraps-strings/inverted/platform.json";
import * as bf4cdn from "@nefomemes/blscraps-strings/bf4_cdn.json";
export default {
  data() {
    return { user: undefined, error: undefined };
  },
  async asyncData(ctx) {
    try {
      let user = await ctx.$client.fetchUser(ctx.params.username);
      if (user) {
        user.readme = await ctx.$markdown(user.userinfo.presentation);
        let gameInverted = {};
        Object.entries(games).map(([game, id]) => {
          gameInverted[id] = game;
        });

        for (let soldier of user.soldiers) {
          switch (soldier.game) {
            case games["BF3"]: {
              soldier.soldierPic = `https://cdn.battlelog.com/bl-cdn/cdnprefix/1323198/public/profile/bf3/soldier/l/${soldier.persona.picture}.png`;
              break;
            }
            case games["WARSAW"]: {
              soldier.soldierPic = `https://d34ymitoc1pg7m.cloudfront.net/bf4/soldier/large/${
                soldier.persona.picture
              }-${bf4cdn["l_large"][soldier.persona.picture]}.png`;
              break;
            }
            case games["BFH"]: {
              break;
            }

            case games["MOHW"]: {
              soldier.soldierPic = `https://cdn.battlelog.com/bl-cdn/cdnprefix/1323198/public/profile/mohw/soldiers/295x350/${
                soldier.persona.picture || "default"
              }.png`;
              break;
            }
          }
          soldier.platformName = platforms[soldier.platform];
          soldier.gameName = gameInverted[soldier.game];
          soldier.soldierPic =
            soldier.soldierPic ||
            "https://d34ymitoc1pg7m.cloudfront.net/bf4/soldier/large/default-1066f14a.png";
        }

        user = JSON.parse(JSON.stringify(user));
        return { user, error: false };
      }
    } catch (error) {
      console.error(error);
      ctx.error(<NuxtError>{ status: 500, message: error });
      return { error, user: null };
    }
  },
  head() {
    return {
      title: this.user.user.username || "User not found",
    };
  },
  methods: {
    userify(user: User) {
      let userified = new User(this.$client, user);
      return userified;
    },
  },
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
  position: absolute;
  top: 30px;
  left: 30px ;
}

.soldier-portrait {
  z-index: 4;
  width: 100%;
  height: 100%;
}

#error-page {
  display: grid;
  place-items: center;
  height: 100%;
  color: white;

  h1 {
    font-size: 30px;
    font-weight: 600;
  }

  h2 {
    font-size: 20px;
  }

  a {
    color: white !important;
  }
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

.soldier-box {
  width: 330px;
  height: 330px;
}

.user-soldiers {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
