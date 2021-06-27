<template>
  <div class="index-page"></div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component({})
export default class IndexPage extends Vue {
  async asyncData(ctx) {
    ctx.$auth?.loggedIn
      ? ctx.router.push("/dashboard")
      : ctx.router.push("/about");
  }
}
</script>
