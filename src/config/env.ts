import { config } from "dotenv";

config();

const PORT: number = process.env.PORT ? Number(process.env.PORT) : 3000;
const DB_URI: string = process.env.DB_URI || "";

export default {
  PORT,
  DB_URI,
};
