"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionManager = void 0;
class ConnectionManager {
    constructor() {
        this.clients = new Set();
    }
    add(ws) {
        this.clients.add(ws);
    }
    remove(ws) {
        this.clients.delete(ws);
    }
    broadcast(payload) {
        const message = JSON.stringify(payload);
        for (const client of this.clients) {
            if (client.readyState === client.OPEN) {
                client.send(message);
            }
        }
    }
}
exports.connectionManager = new ConnectionManager();
