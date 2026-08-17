"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// location.routes.ts
const express_1 = require("express");
const location_controller_1 = require("../controllers/location.controller");
const router = (0, express_1.Router)();
router.post("/locations", location_controller_1.ingestLocation);
exports.default = router;
