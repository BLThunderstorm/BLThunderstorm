<template>
  <div class="features">
    <div class="features-icon">
      <v-icon>
        {{ icon }}
      </v-icon>
    </div>
    <div class="features-content">
      <div class="features-title" v-html="title"></div>
      <div class="features-text" v-html="content"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    content: String,
    icon: String,
    isMaterialIcon: Boolean,
  },
};
</script>
<style scoped lang="sass">
.features-title
 font-weight: bold
 display: flex
 align-items: center

.features
 display: flex
 font-size: 25px !important
 min-width: calc(100% - 80px)
 margin-bottom: 40px
 margin-top: 40px

.features-content
 display: flex
 flex-direction: column
 margin-left: 5px

.features-icon
 display: flex
 align-items: center
 height: 35px

.features-text
 font-size: 20px !important
</style>
