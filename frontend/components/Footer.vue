<template>

<footer class="footer nefo-footer">

<nav v-if="links && links.length" class="nefo-navi-links" >
			<ul v-for="category in links" class="nefo-links-bar" >
				<li class="nefo-link-title" v-html="category.title">
					
				</li>
			
			<li v-if="category.links && category.links.length" v-for="link in category.links">
				<a v-bind:href="link.href" v-html="link.title"></a>
				</li>
			
			</ul>
		</nav>


		<div v-if="disclaimers && disclaimers.length" v-for="disclaimer in disclaimers" class="nefo-copyright-container">
			<div class="nefo-copyright" v-html="disclaimer">

			</div>
		</div>

		<div v-if="icons && icons.length" class="nefo-footer-links">
		<div v-for="icon in icons" class="nefo-icons"><a v-bind:href="icon.href"><img v-if="icon.name" class="nefo-simple-icons" v-bind:src="`https://simple-icons.github.io/simple-icons-website/icons/${icon.name}.svg`" style="filter: invert(100%)"/><img v-else v-bind:src="icon.imageUrl"></a></div>
			</div>
</footer>
		

</template>
<script>
export default {
props: {
links: Array,
disclaimers: Array,
icons: Array
},

async asyncData(){

}
}
</script>
<style lang="sass">
.nefo-footer 
 background-color: #212121
 color: white
 padding-top: 20px
 padding-bottom: 40px;
 padding-left: 40px
 padding-top: 60px
 padding-right: 40px
 margin-top: -20px;
			position: relative;
			
		
		
		
		.nefo-footer nefo-links-bar {
		}
			.nefo-footer	.nefo-navi-links {
			flex-wrap: wrap;
display: flex;  


margin-bottom: 20px;
justify-content: space-between; 
}
 
.nefo-footer .nefo-footer-links{  
display: flex;  

margin-top: 0px;
height: 50px;
width: 150px;
justify-content: space-between;
align-items: center;
margin-top: 40px;


}
 
.nefo-footer .nefo-icons {    
width: 40px;
height: 40px;
color: white;
}
 
.nefo-footer .nefo-discord-icon {
width: 50px;
height: 50px;
}
 
.nefo-footer .nefo-link-title {
font-size: 20px;    
font-weight: bold;      
color: white;
}

.nefo-footer a:link, a:visited {
color: white !important;
}

.nefo-footer .nefo-navi-links ul {
list-style: none;
}

	.nefo-footer nefo-copyright {
		
			width: calc(100% - 90px);
			margin-left: 40px;
			text-align: center;
			}
			
			
			</style>
