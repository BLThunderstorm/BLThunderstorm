<template>
<div class="markdown-box">
<Markdown v-bind:content="content"/>
</div>

</template>
<script>
export default {
props: {
content: String
}
}
</script>
<style>
.markdown-box {
background-color: black;
color: white;
border-radius: 10px;
padding: 20px;
}
</style>