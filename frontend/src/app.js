
(async () => {
	
	$("		#things-container video source")[0].setAttribute('src', `/assets/webm/bf-${Math.floor(Math.random() * 4)}.webm`);
  $("		#things-container video")[0].load();	
	
	
	var router = VueRouter.createRouter({
	  mode: 'history',
	  routes: []
})



var app = Vue.createApp({
router,	 
  data() {
    return {
      loading: false,
      template: null,
      error: null,
    }
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route,
      () => {
        this.fetchData()
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  },
  methods: {
    fetchData:  async function() {
	
      this.loading = true
      // replace `getPost` with your data fetching util / API wrapper
    try {
if(window.location.pathname === "/"){
const home = await axios.get("/raw/home.template.html");

this.template = home.data;
} else {
const notFoundPage = await axios.get("/raw/404.template.html");

this.template = notFoundPage.data;
}

this.loading = false;
    } catch (e) {
	    this.error = e;
    }

  },
  }})

app.mount("#content-container");
})()