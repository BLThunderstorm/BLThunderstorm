<template>
  <v-app >
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

<style lang="sass">
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

<style scoped lang="sass">

.jokomium
 width: 100%
 max-width: 500px

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
