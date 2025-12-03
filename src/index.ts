import { Hono } from 'hono';
//import { auth } from "../lib/auth";
import products from "../routes/product";
//import auth from "../routes/auth";

const app = new Hono();


app.route("/", products);

//app.route("/", auth);



//app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));


export default app;