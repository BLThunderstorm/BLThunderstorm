<template>
<div class="navigation-bar-container">
<div class="navigation-bar">
<div class="nav-category home-category">
    <div class="home-button button">
    </div>
</div>
</div>
</div>
</template>
<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';

@Component
export default class NavigationBar extends Vue {
}

</script>
<style lang="sass">
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
 background-color: rgba(0, 0, 0, 90%) 
 height: 100vh

.navigation-bar .button 
 width: 50px 
 height: 50px
 border-radius: 15px

.home-button 
 background-image: url('/icon.png')
.nav-category
 align-items: center
</style>