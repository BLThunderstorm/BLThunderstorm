<template>
<div>
<div v-if="loggedIn" class="user-loggedin-header">
<img v-bind:src="user.avatar_url"/>
</div>
<div v-else class="user-loggedout-header" v-on:click="login()">
<div>Log in</div>
</div>
</div>
</template>
<script>
export default {
	data(){
		return {user: undefined,
		loggedIn: undefined};
	},
	async fetch(){
	
		var data = {}
	
		this.$set(this, 'user', this.$auth.user);
		this.$set(this, 'loggedIn', this.$auth.loggedIn);
		
	
	},
	methods: {
		login(){
			return this.$auth.loginWith('github');
		}
	}
}


</script>
<style>
.user-loggedin-header img {
	border-radius: 5px;
	border: solid 1px;
	height: 50px;
	width: 50px;
}
.user-loggedout-header {
	display: flex;
	align-items: center;
	justify-content: center;
	border: solid 1px;
	padding: 10px;
	border-radius: 5px;

}

</style>