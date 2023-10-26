import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "viaduct.proxy.rlwy.net",
  port: 36769,
  username: "postgres",
  password: "*e2F5*-Ed46af5BEeGGAc1EE22c6ccff",
  database: "railway",
  synchronize: false,
  logging: true,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
  ssl: {},
});
