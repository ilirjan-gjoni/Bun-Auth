import { defineConfig} from "drizzle-kit";

export default  defineConfig({
  schema: "./db/schema.ts",            // where your Drizzle tables are
  out: "./drizzle",                // where migrations will be saved
  dialect: "postgresql",           // since you’re using Neon/Postgres
  dbCredentials: {
    url:process.env.DATABASE_URL!
  },
});

