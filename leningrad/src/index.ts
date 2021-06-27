import fastify from "fastify";
import fastifyPassport from 'fastify-passport';
import fastifySecureSession from 'fastify-secure-session';
import * as path from "path";
import * as fs from "fs";
let app = fastify({
    logger: true
});


// set up secure sessions for fastify-passport to store data in
app.register(fastifySecureSession, { key: fs.readFileSync(path.join(__dirname, 'secret-key')) })
// initialize fastify-passport and connect it to the secure-session storage. Note: both of these plugins are mandatory.
app.register(fastifyPassport.initialize())
app.register(fastifyPassport.secureSession())
let exported: (req: res)) | undefined;

if(process.env.DEPLOYMENT_PLATFORM === "vercel"){
exported = async (req, res) => {
    await app.ready();
    app.server.emit('request', req, res);
}
} else { 
    (async () => {
        try {
          await app.listen(process.env.PORT)
        } catch (err) {
          app.log.error(err)
          process.exit(1)
        }
      });

    }

export default exported;