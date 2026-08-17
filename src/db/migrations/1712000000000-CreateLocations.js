"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLocations1712000000000 = void 0;
class CreateLocations1712000000000 {
    constructor() {
        this.name = "CreateLocations1712000000000";
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS postgis;`);
        await queryRunner.query(`
      CREATE TABLE "locations" (
        "id" uuid NOT NULL DEFAULT gen_random_uuid(),
        "deviceId" character varying NOT NULL,
        "point" geography(Point,4326) NOT NULL,
        "recordedAt" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_locations_id" PRIMARY KEY ("id")
      );
    `);
        await queryRunner.query(`
      CREATE INDEX "IDX_locations_point" ON "locations" USING GIST ("point");
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "locations";`);
    }
}
exports.CreateLocations1712000000000 = CreateLocations1712000000000;
