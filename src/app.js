"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
const ws_1 = require("ws");
const routes_1 = __importDefault(require("./routes"));
const socket_controller_1 = require("./websocket/socket.controller");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)()); // Enable CORS for all routes
app.use("/api", routes_1.default);
const httpServer = (0, http_1.createServer)(app);
exports.httpServer = httpServer;
const wsServer = new ws_1.WebSocketServer({ server: httpServer, path: "/ws" });
wsServer.on("connection", socket_controller_1.registerSocketHandlers);
