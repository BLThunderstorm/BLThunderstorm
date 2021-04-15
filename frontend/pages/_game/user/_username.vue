<template>
<div>

<div v-if="user" id="user-page-container">
<div id="user-page">
<div id="main-user-wallpaper" class="user-page-content">
<div id="main-user-wallpaper-content">
<div id="main-user-username-box">
<p class="user-name">
{{ user.username }}
</p>
<p class="user-id"> {{ user.userId }} </p>
</div>
<img v-bind:src="user.avatarURL" id="main-user-avatar-box">
</div>
</div>

<div id="user-presentation" class="user-page-content">
<LazyMarkdownBox v-if="user.readme" v-bind:content="user.readme"/>
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
</template>
<script>
import bljs from 'battlelog.js/dist/bundle.dev.js';

var client = bljs();

export default {
data() {
return {user: undefined, error: undefined, readme: undefined}
},
async asyncData({ params }){

try {
let gameclient = client.game(params.game);

let user = await gameclient.users.fetch(params.username);

if(user){

user.avatarURL = user.displayAvatarURL({size: 2048});

user.readme = user.userinfo.presentation;



return { user, error: false};
}

} catch(error) {
console.error(error);
return { error, user: null };
}
},

head() {
  return {
  title: this.user.username || "User not found",
  }
}

}
</script>
<style>

#user-page-container {
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
}



#error-page h1 {
  font-size: 30px;
  font-weight: 600;
}


#error-page h2 {
font-size: 20px;
}
#box-error {
width: calc(100% - 80px);
text-align: center;
}

#error-page a {

color: white !important;
}



#error-page {
display: grid; place-items: center;
height: 100%;
color: white;
}

#user-page {
width: calc(100% - 40px);
margin-top: 20px;
position: relative;
}

#main-user-wallpaper {
background-color: black;
color: white;
width: 100%;
position: relative;
height: 150px;
border-radius: 10px;
}

#main-user-wallpaper-content {
padding: 20px;
height: 100%;
width: 100%;
display: flex;
justify-content: space-between;
}

#main-user-username-box {
display: flex;
flex-direction: column;
justify-content: flex-end;
}


 .user-name {
 font-weight: 600;
 font-size: 35px;
 }
 
 .user-page-content {
 margin-bottom: 20px;
 }
</style>
