import { config } from "dotenv";

config();

console.log("PORT:", process.env.PORT);
console.log("DB_URI:", process.env.DB_URI);
const PORT: number = process.env.PORT ? Number(process.env.PORT) : 3000;

const DB_URI: string = process.env.DB_URI || "";

export default {
  PORT,
  DB_URI,
};
