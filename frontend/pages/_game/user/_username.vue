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
              <div class="user-readme"></div>
            </div>
            <div class="user-soldiers">
              <div class="title">Soldiers</div>
              <div
                v-for="soldier in user.soldiers"
                :key="soldier.persona.personaId"
              >
                <div class="title">
                  {{
                    (soldier.persona.clanTag
                      ? "[" + soldier.persona.clanTag + "] "
                      : "") + (soldier.persona.personaName || user.user.username)
                  }}
                </div>
              </div>
            </div>
            <div class="friends-bar content-order-container user-page-content">
             
             
                <div class="title">Friends</div>
              <div class="content-order">
                <div v-for="friend in user.friends" :key="friend.user.userId">
                <a><v-avatar size="48"
                      ><img
                        :src="
                          userify(friend).displayAvatarURL({ size: 128 })
                        " /></v-avatar></a>
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

export default {
  data() {
    return { user: undefined, error: undefined, readme: undefined };
  },
  async asyncData(ctx) {
    try {
      let user = await ctx.$client.fetchUser(ctx.params.username);
      if (user) {
        user.readme = await ctx.$markdown(user.userinfo.presentation);
        switch(ctx.$client.client.game){
          case "bf3":{

            user.soldierPic = `https://cdn.battlelog.com/bl-cdn/cdnprefix/1323198/public/profile/bf3/soldier/l/bf3-${user.persona.picture}.png`
           break;
          };
          case "bf4":{
            
          }
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
.user-soldiers, .friends-bar {
  background-color: #303030;
}

.friends-bar {
  display: flex;
  flex-direction: column;
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
</style>
