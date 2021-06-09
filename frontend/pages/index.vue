
<template>
<div></div>
</template>
<script lang="ts">
  import  Component  from "vue-class-component";
  import Vue from "vue";
  
@Component({})
export default class IndexPage extends Vue {
  asyncData(ctx){
    
    ctx.$auth.loggedIn ? ctx.redirect('/dashboard') : ctx.redirect('/about');
    
    return {};
    
}}
</script>
