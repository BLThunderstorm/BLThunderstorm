<template>
  <div>
    <div></div>
  </div>
</template>
<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

Component({});
export default class SoldierPage extends Vue {
  async asyncData(ctx) {
    let soldier = await ctx.$client.fetchSoldier(ctx.params.soldier);

    soldier = JSON.parse(JSON.stringify(soldier));
    return { soldier };
  }
}
</script>
