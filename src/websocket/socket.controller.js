"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSocketHandlers = registerSocketHandlers;
const connectionManager_service_1 = require("../services/connectionManager.service");
const location_service_1 = require("../services/location.service");
function registerSocketHandlers(ws) {
    connectionManager_service_1.connectionManager.add(ws);
    ws.on("message", async (raw) => {
        try {
            const data = JSON.parse(raw.toString());
            await (0, location_service_1.handleIncomingLocation)(data);
        }
        catch (err) {
            ws.send(JSON.stringify({ type: "error", message: err.message }));
        }
    });
    ws.on("close", () => connectionManager_service_1.connectionManager.remove(ws));
}
