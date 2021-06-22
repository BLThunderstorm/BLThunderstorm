<template>
  <div class="navigation-bar-container">
    <div class="navigation-bar">
      <div class="top-category-container">
        <div class="nav-category home-category">
          <div class="home-button button"></div>
        </div>
      </div>
      <div class="nav-category bottom-category">
        <div class="button profile-button"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class NavigationBar extends Vue {}
</script>
<style scoped lang="sass">
.navigation-bar-container
 position: fixed
 left: 0
 top: 0

.navigation-bar, .nav-category
 display: flex
 flex-direction: column
 height: auto

.navigation-bar
 position: relative
 width: 75px
 padding-top: 25px
 background-color: rgba(0, 0, 0, 80%)
 height: 100vh
 border-right: solid black

.navigation-bar .button
 width: 50px
 height: 50px
 border-radius: 15px

.home-button
 background-image: url('https://gitcdn.xyz/cdn/BLThunderstorm/BLThunderstorm/development/docs/brand/logo/Logo.svg')
 background-size: cover
.nav-category
 align-items: center
</style>
