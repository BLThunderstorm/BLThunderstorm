<template>

  <div>
  
  <style>
  
  </style>
  
  <div></div>
  <div id="intro" class="box">

      
        
        <div class="title">
          <p id="service-name">BLThunderstorm</p>
            <p class="message">Unofficial stats-tracking and dashboard site for Battlefield games.</p>
          </div>
      
     </div>
     
        
        <div id="about" class="box">
         <div id="features-container">
	 <FeatureHome title="Forums, revived" icon="forum" is-material-icon content="Comment, ask, or answer something on old threads that have been archived. Maybe you wanna ask about an a bug to an old thread, share things, or do stuff."/>
	<FeatureHome title="It's hybrid" content="BLThunderstorm is made with Nuxt.js, a Vue.js framework which one of it's main features is it combines Server Side Rendering with Client Side Rendering." />

	
</div>



<link href="/assets/styles/home.css" rel="stylesheet"/>
  </div>
  </div>
  
</template>

<script>

export default {
  head(){
  return {
  title: "Home"
  }
  },
  
}
</script>
<style lang="sass">

#service-name
 font-family: "Bebas Neue" !important
 font-size: 100px
 line-height: 100px
 margin-bottom: -1px

#intro 
 position: relative

#intro .title 
 position: absolute
 display: grid
 place-items: center
 font-family: Arial
 color: white

#intro .message
 font-weight: 600
   
#about 
 background-color: rgba(0, 0, 0, 0.4)
 min-height: 100vh
 max-height: auto;
 min-width: calc(100% - 80px)
      padding-left: 40px;
      padding-right: 40px;
      
      position: relative;
 
        padding-top: 100px;
        padding-bottom: 100px;
       color: white;
     
    }

    #features-container {
     display: flex;
       
        align-items: center;
    justify-content: center;
flex-wrap: wrap;
    }
    

    #about-content {
    	margin-left: 40px;
     
	}
    
   

@media (portrait: landscape)

	#forums-container 
	 flex-direction: row
	 align-items: flex-start

	#about .features 
	 width: 25%
	 margin-right: 40px


	#about #forum-features 
	 width: 30% !important


</style>