import { AppDataSource } from "./data-source";
import { Location } from "./location.entity";

const locationRepo = AppDataSource.getRepository(Location);

export async function saveLocation(data: {
  deviceId: string;
  lat: number;
  lng: number;
}) {
  const result = await locationRepo
    .createQueryBuilder()
    .insert()
    .into(Location)
    .values({
      deviceId: data.deviceId,
      point: () => `ST_SetSRID(ST_MakePoint(${data.lng}, ${data.lat}), 4326)`,
    })
    .returning("*")
    .execute();

  return result.raw[0];
}