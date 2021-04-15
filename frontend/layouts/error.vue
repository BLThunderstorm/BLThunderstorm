<template>
  <v-app >
  <div id="error-page">
  <div id="box-error">
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <h2>
    <NuxtLink to="/">
      Return to home page
    </NuxtLink>
    </h2>
    </div>
    
    </div>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
#error-page h1 {
  font-size: 30px;
  font-weight: 600;
}


#error h2 {
font-size: 20px;
}
#box-error {
width: 50%;
text-align: center;
}

#error-page a {

color: white !important;
}



#error-page {
display: grid; place-items: center;
height: 100%;
}
</style>
