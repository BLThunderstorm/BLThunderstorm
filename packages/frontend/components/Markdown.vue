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

remark()
  .use(remarkGFM)
  .use(remarkRehype)
  .use(rehypeSanitize)
  .process(this.content, (err, file) => {
  if(err){
  console.log(this.content);
  return this.parsedContent = `${err.stack ||  err.toString()}`;
  }
  return this.parsedContent = String(file);
  });
},
props: {
content: String
}
}
</script>
<style>
</style>
