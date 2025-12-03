import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db/index"; // your drizzle instance
import { openAPI } from "better-auth/plugins"

export const auth = betterAuth({
   // Drizzle adapter for Postgres (Neon)
  database: drizzleAdapter(db, {
    provider: "pg",
    
  }),
  emailAndPassword: {    
        enabled: true
    } ,

     plugins: [ 
        openAPI(), 
    ] 
  // Add Google as a social provider
/*  socialProviders: {
    google: {
      clientId: Deno.env.get("GOOGLE_CLIENT_ID")!,
      clientSecret: Deno.env.get("GOOGLE_CLIENT_SECRET")!,
    },
  },  */
});