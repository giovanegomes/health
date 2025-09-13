import { sql } from "drizzle-orm";
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { createSelectSchema } from "drizzle-zod";
import z from "zod";

export const user = sqliteTable("users", {
  id: integer("id").primaryKey(),
  email: text("email").unique().notNull(),
  name: text("name").notNull(),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
  syncedAt: text("synced_at"),
  needsSync: integer("needs_sync", { mode: "boolean" }).default(true),
});

const UserSelectSchema = createSelectSchema(user);

export type User = z.infer<typeof UserSelectSchema>;
