CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"price_usd" numeric(10, 2) NOT NULL,
	"description" text,
	"delivery_url" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
