import { openDatabaseSync } from "expo-sqlite";
import { drizzle, ExpoSQLiteDatabase } from "drizzle-orm/expo-sqlite";
import { migrate } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../database/drizzle/migrations";

export class DatabaseService {
  readonly #DATABASE_NAME = "healthDatabase.db";

  static #instance: DatabaseService;

  #db?: ExpoSQLiteDatabase;

  #initialized = false;

  constructor() {}

  static getInstance() {
    if (!DatabaseService.#instance) {
      DatabaseService.#instance = new DatabaseService();
    }

    return DatabaseService.#instance;
  }

  async initialize() {
    try {
      console.log("Iniciando banco de dados...");
      if (this.#initialized) return;

      const sqlite = openDatabaseSync(this.#DATABASE_NAME);
      this.#db = drizzle(sqlite);

      console.log("Instância SQLite iniciada!");
      console.log("Executando migrations...");
      try {
        await migrate(this.#db, migrations);
      } catch (error) {
        console.error("erro ao rodar migration ", error);
      }
      this.#initialized = true;
      console.log("Migrations finalizadas!");
      console.log("Banco inicializado com sucesso!");
    } catch (error) {
      console.error("Falha ao inicializar o banco:", error);
    }
  }

  getDb() {
    if (!this.#initialized || !this.#db) {
      throw new Error(
        "Database not initialized. Call DatabaseService.getInstance().initialize() first."
      );
    }

    return this.#db;
  }
}
