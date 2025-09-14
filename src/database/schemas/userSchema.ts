import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { createSelectSchema } from "drizzle-zod";
import z from "zod";
import { syncColumns, timestamps } from "../helpers/columns.helpers";

export const user = sqliteTable("users", {
  id: integer("id").primaryKey(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  ...timestamps,
  ...syncColumns,
});

const UserSelectSchema = createSelectSchema(user);

export type User = z.infer<typeof UserSelectSchema>;
