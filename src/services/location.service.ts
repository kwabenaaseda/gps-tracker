import { saveLocation } from "../db/location.repository";
import { connectionManager } from "./connectionManager.service";

interface IncomingLocation {
  deviceId: string;
  lat: number;
  lng: number;
}

function isValidLocation(data: any): data is IncomingLocation {
  return (
    typeof data?.deviceId === "string" &&
    typeof data?.lat === "number" &&
    typeof data?.lng === "number" &&
    data.lat >= -90 && data.lat <= 90 &&
    data.lng >= -180 && data.lng <= 180
  );
}

export async function handleIncomingLocation(data: unknown) {
  if (!isValidLocation(data)) {
    throw new Error("Invalid location payload");
  }
  const saved = await saveLocation(data);
  const point = {
    id: saved.id,
    deviceId: data.deviceId,
    lat: data.lat,
    lng: data.lng,
    recordedAt: saved.recordedAt,
  };
  connectionManager.broadcast({ type: "location_update", point });
  return point;
}