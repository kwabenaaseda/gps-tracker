// server.ts
import { httpServer } from "./app";
import { AppDataSource } from "./db/data-source";

const PORT = process.env.PORT || 3001;

AppDataSource.initialize()
  .then(() => {
    console.log("Data source initialized");
    httpServer.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`WebSocket available on ws://localhost:${PORT}/ws`);
    });
  })
  .catch((err) => {
    console.error("Failed to initialize data source:", err);
    process.exit(1);
  });