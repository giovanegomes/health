// import { DatabaseService } from "../services/database";
// import { excercise, Exercise } from "../database/schemas/exersiseSchema";
// import { eq } from "drizzle-orm";

// class ExerciseRepository {
//   get #db() {
//     return DatabaseService.getInstance().getDb();
//   }

//   async getAll(): Promise<Exercise[]> {
//     return this.#db.select().from(excercise).all();
//   }

//   async getById(id: number): Promise<Exercise | undefined> {
//     return this.#db.select().from(excercise).where(eq(excercise.id, id)).get();
//   }

//   async create(data: Exercise) {
//     return this.#db.insert(excercise).values(data).run();
//   }

//   async update(id: number, data: Partial<Exercise>) {
//     return this.#db
//       .update(excercise)
//       .set(data)
//       .where(eq(excercise.id, id))
//       .run();
//   }

//   async delete(id: number) {
//     return this.#db.delete(excercise).where(eq(excercise.id, id)).run();
//   }
// }

// export default new ExerciseRepository();
