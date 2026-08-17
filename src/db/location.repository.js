"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveLocation = saveLocation;
const data_source_1 = require("./data-source");
const location_entity_1 = require("./location.entity");
const locationRepo = data_source_1.AppDataSource.getRepository(location_entity_1.Location);
async function saveLocation(data) {
    const result = await locationRepo
        .createQueryBuilder()
        .insert()
        .into(location_entity_1.Location)
        .values({
        deviceId: data.deviceId,
        point: () => `ST_SetSRID(ST_MakePoint(${data.lng}, ${data.lat}), 4326)`,
    })
        .returning("*")
        .execute();
    return result.raw[0];
}
