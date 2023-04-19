import dotenv from "dotenv";
import config from "./config.js";

const envPath = config?.production
  ? "./env/.prod"
  : "./env/.dev"

dotenv.config({
  path: envPath
});


