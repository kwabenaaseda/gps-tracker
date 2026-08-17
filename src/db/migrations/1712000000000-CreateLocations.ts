import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateLocations1712000000000 implements MigrationInterface {
  name = "CreateLocations1712000000000";

  public async up(queryRunner: QueryRunner): Promise<void> {
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

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "locations";`);
  }
}