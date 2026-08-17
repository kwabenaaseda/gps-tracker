"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// server.ts
const app_1 = require("./app");
const data_source_1 = require("./db/data-source");
const PORT = process.env.PORT || 3001;
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Data source initialized");
    app_1.httpServer.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
        console.log(`WebSocket available on ws://localhost:${PORT}/ws`);
    });
})
    .catch((err) => {
    console.error("Failed to initialize data source:", err);
    process.exit(1);
});
