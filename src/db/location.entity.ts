import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Index } from "typeorm";

@Entity("locations")
export class Location {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  deviceId!: string;

  @Index({ spatial: true })
  @Column({
    type: "geography",
    spatialFeatureType: "Point",
    srid: 4326,
  })
  point!: string; // stored as WKT/GeoJSON on the way in

  @CreateDateColumn()
  recordedAt!: Date;
}