const express = require("express");
var app = express();
const path = require("path")
/* Credit:  https://stackoverflow.com/a/31144924 */
function requireHTTPS(req, res, next) { 
	/* The 'x-forwarded-proto' check is for Heroku */
if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
	return res.redirect('https://' + req.get('host') + req.url);
	} 
	
	next();
}

app.use(requireHTTPS);
app.use("/", express.static(path.join(__dirname), {
	lastModified: true,
	extensions: ["html"]
}));

app.use("/raw", express.static(path.join(__dirname, "raw"), {
	lastModified: true
}))

app.all("/arc-sw.js", (req, res) => res.sendFile(path.join(__dirname, "assets", "scripts", "arc-sw.js")));

app.all("*", (req, res) => {
	res.sendFile(path.join(__dirname,  "app.html"));
})

app.listen(process.env.PORT || 3000, () => console.log("Server is running!"))