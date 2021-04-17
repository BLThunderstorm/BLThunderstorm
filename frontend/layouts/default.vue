<template>
<div>
<script async src="https://arc.io/widget.min.js#pYA86F7H"></script>
<script src="//cdn.jsdelivr.net/npm/eruda"></script>
<script>eruda.init();</script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<v-app>
<div>
    <div id="things-container">
<v-app-bar dense max-height="48" class="nefo-app-bar">
<div class="title-header verticallyAlign bebas-neue">
<a href="/">
<span class="front">BL</span>
<span class="back">Thunderstorm</span>
</a>
</div>
<v-spacer></v-spacer>
<div v-if="$auth.user">
<v-menu :close-on-content-click="false" nudge-right>
<template v-slot:activator="{on, attrs}">
<v-avatar size="40" v-on:click="on = true" v-bind="attrs">
<img :src="$auth.user.avatar_url"></img></v-avatar>
</template>

</v-menu>
</div>
<v-btn v-else v-on:click="$auth.loginWith('github')" color="teal darken-3">
Sign in
</v-btn>
</v-app-bar>
    	

</div>
    
    </div>
<div id="right-side-base-header">
<SignInButton/>

</div>
<SignedInNavigation/>
  </div>-->
  <div class="bg-picture"></div>
<!--
    <video loop="" autoplay="" muted="" disablepictureinpicture="" class="bg-video">
      <div><p>Ugh, seems the video is broken.</p></div>
    <source v-bind:src="video"/>
    </video>-->
>>>>>>> frontend/master

   </div>
 
    <div id="template-container">
    <Nuxt/>
    </div>
      </div>
      

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      

 </div>
  </div>
=======
=======
>>>>>>> frontend/master
      <Footer v-bind:links="links" v-bind:icons="icons" v-bind:disclaimers="disclaimers"/>

=======
      <Footer v-bind:links="links" v-bind:icons="icons" v-bind:disclaimers="disclaimers"/>
</v-app>
>>>>>>> frontend/master
 </div>
 

 
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> frontend/master
=======
>>>>>>> frontend/master
=======
>>>>>>> frontend/master
</template>
<script>
export default {
 data () {
<<<<<<< HEAD
=======
 
 
>>>>>>> frontend/master
   return { video: `/assets/videos/bf-${Math.floor(Math.random() * 4)}.webm`,
		disclaimers: [
		'This project is neither developed by Electronic Arts Inc. or EA Digital Illusions CE AB nor affiliated with them. Battlefield and Battlelog are registered trademarks of Electronic Arts Inc. All company, product, and service names, logos, and brands, and any other copyrighted materials are property of their respective owners and are used for identification purposes only. Use of these materials does not imply endorsement.'
		],
		links: [{title: 'This website', links: [{title: 'GitLab repo', href: 'https://gitlab.com/blthunderstorm/about'},{title: 'Status', href: 'https://blthunderstorm.instatus.com'}]}],
<<<<<<< HEAD
		icons: [{name: 'gitlab', href: 'https://gitlab.com/BLThunderstorm'}]
   };
  }
}
</script>
<style>
#intro {
			height: 100vh;
			width: 100vw;
    
      

		}

    #title {
			position: absolute;
			  top: 50%;


  left: 50%;
  transform: translate(-50%, -50%);
		
		
		
			
		}

		  #things-container  video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
}


#base-header, #things-container video {
  grid-column: 1;
  grid-row: 1;
}
  .battlefield-logo, #title-header {
    font-family: "Bebas Neue" !important;
  }
    #base-header {
      height: 75px;
      
      position: fixed;
      
   	width: 100vw;
      z-index: 10;
       background-color: black;
      color: white;
           display: flex;
	        
    vertical-align: middle;
    justify-content: space-between;
    }

	
	#right-side-base-header, #left-side-base-header {
		width: 50vw;
		position: relative;
    
 
 
	}
    #left-side-base-header {
	    display: flex;

	       justify-content: flex-start;
    }

    #right-side-base-header {
	    display: flex;
	    justify-content: flex-end;
	    align-items: center;
	    margin-right: 25px;
    }
    
    #template-container {
    	padding-top: 75px;
    }

#title-header {
	display: flex;
	height: 100%;
	align-items: center;
	margin-left: 20px;
	font-size: 25px;
	
	
}
#left-side-base-header-content {
	display: flex;
	height: 100%;
}
#title-header a, #title-header a:link, #title-header a:visited {
	color: white;
	text-decoration: none;

}
    #menu-button {
    	display: flex;
    	align-items: center;
    	justify-content: center;
    	width: 50px;
	height: 100%;
    	border-right: 0.001px solid;
    }
</style>
=======
		icons: [{name: 'gitlab', href: 'https://gitlab.com/BLThunderstorm'}],
	       user: null
   };
  },
  
  async asyncData({$auth}){
  this.user = $auth.user;
  }
}
</script>
<style lang="sass">
#intro
 height: 100vh
 width: 100vw
    
#title
 position: absolute
 top: 50%
 left: 50%
 transform: translate(-50%, -50%)
 
.title-header 
 font-size: 30px
 
.title-header .front 
 color: $front-logo-color

.title-header .back 
 color: $back-logo-color
 
#things-container  .bg-picture 
 background-image: url("https://i.imgur.com/dDyRt5Z.jpeg")
 background-repeat: no-repeat
 background-size: cover
 height: 100vh
 width: 100vw
 background-position: 75%
 position: fixed
 top: 0
 left: 0

#base-header, #things-container .bg-picture 
 grid-column: 1
 grid-row: 1

.bebas-neue
 font-family: "Bebas Neue" !important
  
.nefo-app-bar
 position: fixed
 z-index: 10
   
#right-side-base-header, #left-side-base-header 
 width: 50vw
 position: relative
 
#left-side-base-header
 display: flex
 justify-content: flex-start
   
#right-side-base-header
 display: flex
 justify-content: flex-end
 align-items: center
 margin-right: 25px
    
#template-container 
 padding-top: 48px
    

#left-side-base-header-content 
 display: flex
 height: 100%

.title-header a, .title-header a:link, .title-header a:visited 
 color: white
 text-decoration: none
 
#menu-button
 display: flex
 align-items: center
 justify-content: center
 width: 50px
 height: 100%
 border-right: 0.001px solid
    
.user-loggedout-header 
 display: flex
 align-items: center
 justify-content: center
 border: solid 1px
 padding: 5px
 border-radius: 5px

.marginish-page-container
 height: 100%
 width: 100%
 display: flex
 flex-direction: column
 align-items: center

.marginish-page
 width: calc(100% - 40px)
 margin-top: 20px
 position: relative

</style>
>>>>>>> frontend/master
