<template>
<div>

<div v-if="user" class="user-page">
<div class="user-wallpaper user-page-content">
<div class="user-wallpaper-content">
<div class="user-username-box">
<p class="user-name">
{{ user.user.username }}
</p>
<p class="user-id"> {{ user.user.userId }} </p>
</div>
<img v-bind:src="userify(user).displayAvatarURL({size: 2048})" class="user-avatar-box"/>
</div>
</div>

<div id="user-presentation" class="user-page-content">

<div class="marginish-page-container">
<div class="marginish-page">
<div v-if="user.readme">
  <div class="user-readme">

</div>
</div>

<div v-if="user.friends.size" class="friends-bar content-order-container user-page-content" >

<div class="content-order">
<div class="title">Friends</div>
<div v-for="friend in Array.from(user.friends)">

<a :href="friend.username"><v-avatar size="48"><img :src="userify(friend).displayAvatarURL({size: 128})"></v-avatar></a>

</div>
</div>
</div>
</div>
</div>
</div>
<div v-if="error" id="error-page" >
<div id="box-error">
<h1>
{{ error.toString() }}
</h1>
<h2>
{{ error.stack }}
</h2>
<div>
</div>
</div>
</div>
</div>

</div>
</template>
<script lang="ts">
// @ts-ignore
import { User } from "battlelog.js/src/classes/user.ts";
export default {
data() {
return {user: undefined, error: undefined, readme: undefined}
},
async asyncData(ctx){
try {
  
let user = await ctx.$client.fetchUser(ctx.params.username);
if(user){
user.readme = await ctx.$markdown(user.userinfo.presentation);


user = JSON.parse(JSON.stringify(user));
return { user, error: false };
}
} catch(error) {
console.error(error);
ctx.error({status: 500, message: error});
return { error, user: null  };
}
},
head() {
  return {
  title: this.user.username || "User not found",
  }
}, methods: {
userify(user){

let userified = new User(this.$client, user);
return userified;

}
}
}
</script>
<style lang="sass">
@import '~vuetify/src/styles/styles.sass'


#error-page h1
 font-size: 30px
 font-weight: 600


.content-order-container, .user-readme
 padding: 20px
 background-color: map-get($material-dark, "background")

.content-order-container .content-order
 display: flex

#error-page h2
 font-size: 20px

#box-error
 width: calc(100% - 80px)
 text-align: center


#error-page a
 color: white !important

#error-page
 display: grid
 place-items: center
 height: 100%
 color: white


#user-page
 position: relative

 .user-page-content
  margin-bottom: 20px

.user-wallpaper
 background-color: black
 color: white
 width: 100%
 position: relative
 height: 150px


.user-wallpaper .user-wallpaper-content
 padding: 20px
 height: 100%
 width: 100%
 display: flex
 justify-content: space-between

.user-wallpaper .user-wallpaper-content .user-username-box
 display: flex
 flex-direction: column
 justify-content: flex-end



.user-wallpaper .user-name
 font-weight: 600
 font-size: 35px
</style>
