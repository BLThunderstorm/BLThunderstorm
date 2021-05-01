<template>

  <div id="error-page">
  <div id="box-error">
  <video class="jokomium" muted loop controls autoplay nofullscreen src="/jokomium.mp4"></video>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <div v-else>
      <h1>Error {{ error.statusCode }} </h1>
      <h2>{{ error.message }}</h2>
    </div>
    <h3>
    <NuxtLink to="/">
      Return to home page
    </NuxtLink>
    </h3>
    </div>

    </div>
 
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class ErrorPage extends Vue {
  layout = 'empty';
  props = {
    error: {
      type: Object,
      default: null
    }
  };
  data(): object {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  };
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return { title:  title }
  };
}
</script>

<style lang="sass">
.jokomium
 width: 100%
 max-width: 250px
 max-height: 250px

#error-page h1
 font-size: 30px
 font-weight: 600

#error h2
 font-size: 20px

#box-error
 width: 50%
 text-align: center

#error-page a
 color: white !important

#error-page
 display: grid
 place-items: center
 height: 100%
</style>
