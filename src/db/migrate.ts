import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(async () => {
    await AppDataSource.runMigrations();
    console.log("Migrations complete");
    process.exit(0);
  })
  .catch((err) => {
    console.error("Migration failed:", err);
    process.exit(1);
  });