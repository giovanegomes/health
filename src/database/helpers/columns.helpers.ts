import { sql } from "drizzle-orm";
import { integer, text } from "drizzle-orm/sqlite-core";

export const timestamps = {
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
};

export const syncColumns = {
  syncedAt: text("synced_at"),
  needsSync: integer("needs_sync", { mode: "boolean" }).default(true),
};
