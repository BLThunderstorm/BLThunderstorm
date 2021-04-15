const express = require('express');
const router = express.Router()
const Canvas = require('canvas');
Canvas.registerFont('./assets/Roboto/Roboto-Regular.ttf', { family: 'Roboto Regular' });
const { customSplit } = require("../utils");
router.get("/spiderpres", (req, res) => {
  const query = req.query.text || "Never gonna give you up. Never gonna let you down. Never gonna run around and desert you. Never gonna make you cry. Never gonna say goodbye. Never gonna tell a lie and hurt you.";
  if(!query)return res.status(400).send({status: {code: 400, message: "Bad Request", reason:"An invalid text was provided."}})
  async function renderImage(text){
        
    const canvas = Canvas.createCanvas(300, 400);
    const ctx = canvas.getContext("2d");
    const background = await Canvas.loadImage('https://i.imgur.com/4ioh4zU.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    ctx.font = `15px Roboto Regular`;
    const amount = 27;
    const x = 21;
    const y = 80;
    if(Array.isArray(customSplit(text, amount)) === true){
        ctx.fillText(customSplit(text, amount).join("\n"), x, y);
    }else {
        ctx.fillText(customSplit(text, amount), x,y);
    }
 
    res.setHeader('Content-Type', 'image/png');
     canvas.pngStream().pipe(res);
    // 21, 75
    }
    renderImage(query).catch(err => {
      res.status(500).send({status: {code: 500, message: "Internal server error", reason:{name: err.name ,message: err.message }}})
    })
})

router.get("/wanted", async (req, res) => {
    try {
        const url = req.query.url;
        if(!url) return res.status(400).send({status: {code: 400, message: "Bad Request", reason: "No 'url' parameter given."}});
        const size =  parseInt(req.query.size) || 1280;
        if(Number.isNaN(size)) size = 1280;
        const canvas = Canvas.createCanvas(size, size);
        const ctx = canvas.getContext("2d");
        var width = 407 * 1.3;
        var height = 650 * 1.3;
        var x = 19;
        var y = 269;
    
        var scale = size / 1280;
        width = width * scale;
        height = height * scale;
        x = x * scale;
        y = y * scale;
        try {
            const avatar = await Canvas.loadImage(url);
            await ctx.drawImage(avatar, x, y, width, height)
        } catch{
           return res.status(400).send({status: {code: 400, message: "Bad Request", reason: "An invalid URL was provided."}});
        }
        const bg = await Canvas.loadImage("https://i.imgur.com/rDvxGqY.png");
        await ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

   res.setHeader('Content-Type', 'image/png');
     canvas.pngStream().pipe(res);
    } catch(e){
        return res.status(500).send({status: {code: 500, message:"Internal Server Error", error: {name: e.name, message: e.message}}});
    }
    
});
module.exports = router