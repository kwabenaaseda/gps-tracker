import type { WebSocket } from "ws";
import { connectionManager } from "../services/connectionManager.service";
import { handleIncomingLocation } from "../services/location.service";

export function registerSocketHandlers(ws: WebSocket) {
  connectionManager.add(ws);

  ws.on("message", async (raw) => {
    try {
      const data = JSON.parse(raw.toString());
      await handleIncomingLocation(data);
    } catch (err) {
      ws.send(JSON.stringify({ type: "error", message: (err as Error).message }));
    }
  });

  ws.on("close", () => connectionManager.remove(ws));
}