<template>
<div class="navigation-bar">
<div class="nav-category home-category">
    <div class="home-button button" :style="`background-image: url('${homeButton.image}')`">
    </div>
</div>
</div>
</template>
<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';

@Component
export default class NavigationBar extends Vue {
data(): object {
        return {
           homeButton: {
               image: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cu%0AdzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTAwMCIgaGVpZ2h0PSIxMDAwIiB2%0AaWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBmaWxsPSJub25lIj4KPHJlY3Qgd2lk%0AdGg9IjEwMDAiIGhlaWdodD0iMTAwMCIgZmlsbD0iIzE1MTMyMSIvPgo8cGF0%0AaCBkPSJNNzE3LjYgMzA5SDYyNS42VjIyOUg4OTcuNlYzMDlIODA1LjZWNzg5%0ASDcxNy42VjMwOVoiIGZpbGw9IiNGRjJFMDAiLz4KPHBhdGggZD0iTTEwNi44%0AIDIyOUgyMzkuNkMyODQuOTMzIDIyOSAzMTggMjM5LjY2NyAzMzguOCAyNjFD%0AMzU5LjYgMjgxLjggMzcwIDMxNC4wNjcgMzcwIDM1Ny44VjM4MC4yQzM3MCA0%0AMDkgMzY1LjIgNDMyLjQ2NyAzNTUuNiA0NTAuNkMzNDYuNTMzIDQ2OC43MzMg%0AMzMyLjQgNDgxLjggMzEzLjIgNDg5LjhWNDkxLjRDMzU2LjkzMyA1MDYuMzMz%0AIDM3OC44IDU0NS4yNjcgMzc4LjggNjA4LjJWNjU2LjJDMzc4LjggNjk5LjQg%0AMzY3LjMzMyA3MzIuNDY3IDM0NC40IDc1NS40QzMyMiA3NzcuOCAyODguOTMz%0AIDc4OSAyNDUuMiA3ODlIMTA2LjhWMjI5Wk0yMjkuMiA0NTdDMjQ2LjggNDU3%0AIDI1OS44NjcgNDUyLjQ2NyAyNjguNCA0NDMuNEMyNzcuNDY3IDQzNC4zMzMg%0AMjgyIDQxOS4xMzMgMjgyIDM5Ny44VjM2Ni42QzI4MiAzNDYuMzMzIDI3OC4y%0ANjcgMzMxLjY2NyAyNzAuOCAzMjIuNkMyNjMuODY3IDMxMy41MzMgMjUyLjY2%0ANyAzMDkgMjM3LjIgMzA5SDE5NC44VjQ1N0gyMjkuMlpNMjQ1LjIgNzA5QzI2%0AMC42NjcgNzA5IDI3Mi4xMzMgNzA1IDI3OS42IDY5N0MyODcuMDY3IDY4OC40%0ANjcgMjkwLjggNjc0LjA2NyAyOTAuOCA2NTMuOFY2MDVDMjkwLjggNTc5LjQg%0AMjg2LjI2NyA1NjEuOCAyNzcuMiA1NTIuMkMyNjguNjY3IDU0Mi4wNjcgMjU0%0ALjI2NyA1MzcgMjM0IDUzN0gxOTQuOFY3MDlIMjQ1LjJaTTQzMC4yMzggMjI5%0ASDUxOC4yMzhWNzA5SDY2My4wMzhWNzg5SDQzMC4yMzhWMjI5WiIgZmlsbD0i%0AIzAwODVGRiIvPgo8L3N2Zz4K"
           }
        }
    }
}

</script>
<style lang="sass">
.navigation-bar, .nav-category
 display: flex
 flex-direction: column
 
.navigation-bar
 position: relative
 width: 75px
 background-color: rgba(0, 0, 0, 25%) 
 height: 100%

.navigation-bar .button 
 width: 50px 

.nav-category
 align-items: center
</style>