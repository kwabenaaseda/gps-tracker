"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingestLocation = ingestLocation;
const location_service_1 = require("../services/location.service");
async function ingestLocation(req, res) {
    try {
        const point = await (0, location_service_1.handleIncomingLocation)(req.body);
        res.status(201).json(point);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
}
