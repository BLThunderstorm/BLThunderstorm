<template>
<div>
<script async src="https://arc.io/widget.min.js#pYA86F7H"></script>
<script src="//cdn.jsdelivr.net/npm/eruda"></script>
<script>eruda.init();</script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<div>
    <div id="things-container">

    	
    <div id="base-header">    
   <div id="left-side-base-header">
  
    <div id="menu-button">
    	<span class="material-icons">
menu
</span>

</div>
 <p id="title-header" class="verticallyAlign"><a href="/">BLThunderstorm</a></p>
  

 
    
    </div>
<div id="right-side-base-header">
<SignInButton/>

</div>
<SignedInNavigation/>
  </div>

    <video loop="" autoplay="" muted="" disablepictureinpicture="" class="bg-video">
      <div><p>Ugh, seems the video is broken.</p></div>
    <source v-bind:src="video"/>
    </video>

   </div>
 
    <div id="template-container">
    <Nuxt/>
    </div>
      </div>
      

<<<<<<< HEAD
      

 </div>
  </div>
=======
      <Footer v-bind:links="links" v-bind:icons="icons" v-bind:disclaimers="disclaimers"/>

 </div>
 

 
>>>>>>> frontend/master
</template>
<script>
export default {
 data () {
 
 
<<<<<<< HEAD
   return { video: `/assets/videos/bf-${Math.floor(Math.random() * 4)}.webm`};
=======
   return { video: `/assets/videos/bf-${Math.floor(Math.random() * 4)}.webm`,
		disclaimers: [
		'This project is neither developed by Electronic Arts Inc. or EA Digital Illusions CE AB nor affiliated with them. Battlefield and Battlelog are registered trademarks of Electronic Arts Inc. All company, product, and service names, logos, and brands, and any other copyrighted materials are property of their respective owners and are used for identification purposes only. Use of these materials does not imply endorsement.'
		],
		links: [{title: 'This website', links: [{title: 'GitLab repo', href: 'https://gitlab.com/blthunderstorm/about'},{title: 'Status', href: 'https://blthunderstorm.instatus.com'}]}],
		icons: [{name: 'gitlab', href: 'https://gitlab.com/BLThunderstorm'}]
   };
>>>>>>> frontend/master
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