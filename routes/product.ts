import { Hono } from 'hono'

import {db} from "../db/index";
import {products} from "../db/schema";

const product = new Hono();

product.get("/products", async (c)=>{
try{
  const listproducts = await db.select().from(products);
  return c.json(listproducts);
} catch (err) {
  console.log(err);
  return c.json ({err: "Failed to fetch products"},500);
}
});


export default product;