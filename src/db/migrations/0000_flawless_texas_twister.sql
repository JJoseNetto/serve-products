CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"price" numeric NOT NULL,
	"sku" varchar(50) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
