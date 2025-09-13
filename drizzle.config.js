import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/database/schemas/*",
  out: "./src/database/drizzle",
  dialect: "sqlite",
  driver: "expo",
});
