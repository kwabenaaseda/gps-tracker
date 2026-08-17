"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleIncomingLocation = handleIncomingLocation;
const location_repository_1 = require("../db/location.repository");
const connectionManager_service_1 = require("./connectionManager.service");
function isValidLocation(data) {
    return (typeof data?.deviceId === "string" &&
        typeof data?.lat === "number" &&
        typeof data?.lng === "number" &&
        data.lat >= -90 && data.lat <= 90 &&
        data.lng >= -180 && data.lng <= 180);
}
async function handleIncomingLocation(data) {
    if (!isValidLocation(data)) {
        throw new Error("Invalid location payload");
    }
    const saved = await (0, location_repository_1.saveLocation)(data);
    const point = {
        id: saved.id,
        deviceId: data.deviceId,
        lat: data.lat,
        lng: data.lng,
        recordedAt: saved.recordedAt,
    };
    connectionManager_service_1.connectionManager.broadcast({ type: "location_update", point });
    return point;
}
