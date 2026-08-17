// tracks connected WS clients, broadcasts
import type { WebSocket } from "ws";

class ConnectionManager {
  private clients = new Set<WebSocket>();

  add(ws: WebSocket) {
    this.clients.add(ws);
  }

  remove(ws: WebSocket) {
    this.clients.delete(ws);
  }

  broadcast(payload: unknown) {
    const message = JSON.stringify(payload);
    for (const client of this.clients) {
      if (client.readyState === client.OPEN) {
        client.send(message);
      }
    }
  }
}

export const connectionManager = new ConnectionManager();