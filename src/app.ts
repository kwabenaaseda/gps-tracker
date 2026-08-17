import express from "express";
import cors from 'cors'
import { createServer } from "http";
import { WebSocketServer } from "ws";
import routes from "./routes";
import { registerSocketHandlers } from "./websocket/socket.controller";

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes
app.use("/api", routes);

const httpServer = createServer(app);
const wsServer = new WebSocketServer({ server: httpServer, path: "/ws" });
wsServer.on("connection", registerSocketHandlers);

export { httpServer };