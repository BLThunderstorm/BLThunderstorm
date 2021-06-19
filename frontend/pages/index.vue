<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component({})
export default class IndexPage extends Vue {
async asyncData(ctx){
ctx.$auth?.loggedIn ? ctx.redirect("/dashboard") : ctx.redirect("/about")
}
}
</script>
