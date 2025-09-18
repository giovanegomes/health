import { user, User } from "../database/schemas/userSchema";
import { DatabaseService } from "../services/database";
import { eq } from "drizzle-orm";

class UserRepository {
  get #db() {
    return DatabaseService.getInstance().getDb();
  }

  async getAll(): Promise<User[]> {
    return this.#db.select().from(user).all();
  }

  async getById(id: number): Promise<User | undefined> {
    return this.#db.select().from(user).where(eq(user.id, id)).get();
  }

  async getByEmail(email: string): Promise<User | undefined> {
    return this.#db.select().from(user).where(eq(user.email, email)).get();
  }

  async create(data: Pick<User, "email" | "password">) {
    const userExists = !!(await this.getByEmail(data.email));

    if (userExists) throw Error("Usuário já cadastrado");

    return this.#db.insert(user).values(data).returning();
  }

  async update(id: number, data: Partial<User>) {
    return this.#db.update(user).set(data).where(eq(user.id, id)).run();
  }

  async delete(id: number) {
    return this.#db.delete(user).where(eq(user.id, id)).run();
  }
}

export default new UserRepository();
