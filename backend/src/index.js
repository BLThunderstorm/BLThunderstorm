import express from "express";
import path from "path";
import router from "./blthunderstorm.js";
var app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

app.use(router);

 
 
app.all("*", (req, res) => res.status(404).send("404 not found"))
