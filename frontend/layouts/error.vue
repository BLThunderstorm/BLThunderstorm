<template>

  <div id="error-page">
  <div id="box-error">

    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <div v-else>
    <div v-if="!error.statusCode">
      <h1>You found a mythical bug!</h1>
      <h2>{{ error.stack || error }}</h2>
    </div>
    <div v-else>
      <h1>Error {{error.statusCode}}</h1>
      <h2>{{ error.message || error }}</h2>  
    </div>

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
@Component({})
export default class ErrorPage extends Vue {
  layout = 'empty';
  pageNotFound: string;
  otherError: string;
  props = {
    error: {
      type: {message: String, statusCode: Number},
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
    return {title: "Error"};
  };
}
</script>

<style scoped lang="scss">
.jokomium {
 width: 100%;
 max-width: 250px;
 position: relative;

  iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
  }
}
#error-page {
  display: grid;
  place-items: center;
  min-height: 100vh;
 
  h1 {
    font-size: 30px;
    font-weight: 600;
  }
}
  


#error h2 {
 font-size: 20px;
}
#box-error {
 width: 50%;
 text-align: center;
}

</style>
