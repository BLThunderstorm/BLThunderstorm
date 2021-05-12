<template>
<!-- <div>
<script async src="https://arc.io/widget.min.js#pYA86F7H"></script>

<v-app>
  <div class="page-container">
    <div>
  <NavigationBar/>
  </div>
  <div class="page-content">
  <div class="bg-picture"></div>

    <div id="template-container">
    <Nuxt/>
    </div>
    

    
      <Footer v-bind:links="links" v-bind:icons="icons" v-bind:disclaimers="disclaimers"/>
</div>   
</div>
</div> 
</v-app>

 </div>-->
 <v-app class="page-container">
      <div class="bg-picture">  </div>
 <NavigationBar/>
   <div class="page-content-container">

   <div class="pagecontent">
     <Nuxt/>
     </div>
   
   <Footer :links="links" :icons="icons" :disclaimers="disclaimers"/>
   </div>
   </v-app>
</template>
<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';

@Component
export default class DefaultLayout extends Vue {
data() {
return {
  "disclaimers":[
    "This project is neither developed by Electronic Arts Inc. or EA Digital Illusions CE AB nor affiliated with them. Battlefield and Battlelog are registered trademarks of Electronic Arts Inc. All company, product, and service names, logos, and brands, and any other copyrighted materials are property of their respective owners and are used for identification purposes only. Use of these materials does not imply endorsement.",
    "Made with ❤ by Nefomemes" 
  ],
  "links":[
    {
      "title":"This website",
      "links":[
        {
          "title":"GitHub Repo",
          "href":"https://github.com/BLThunderstorm/BLThunderstorm"
        }
      ]
    }
  ],
  "icons":[
    {
      "name":"github",
      "href":"https://github.com/BLThunderstorm"
    }, 
    {
      "name":"twitter",
      "href":"https://twitter.com/BLThunderstorm"
    }
  ]

};
 
  }
}
</script>
<style lang="sass">
.pagecontent
 min-height: 100vh

.page-container
 display: flex
 flex-directio: row
 justify-content: flex-start
.page-content-container
 position: relative
 width: calc(100% - 75px)
 margin-left: 75px
 background-color: rgba(0, 0, 0, 0.5)

#intro
 height: 100vh
 width: 100vw

.bg-picture
 background-image: url("https://i.imgur.com/dDyRt5Z.jpeg")
 background-repeat: no-repeat
 background-position: 75%
 background-size: cover
 filter: blur(10px)
 height: 100vh
 width: 100vw
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
