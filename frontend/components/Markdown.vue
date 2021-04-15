<template>
<div v-if="parsedContent" v-html="parsedContent">

</div>
</template>
<script>

import remark from "remark";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import remarkGFM from "remark-gfm";
export default {
data(){
return { parsedContent: undefined };
},
async fetch(){
let instance = this;
remark()
  .use(remarkGFM)
  .use(remarkRehype)
  .use(rehypeSanitize)
  .process(this.content, (err, file) => { console.log(file); return this.parsedContent = String(file) });
  console.log(this)
},
props: {
content: String
}
}
</script>
<style>
</style>