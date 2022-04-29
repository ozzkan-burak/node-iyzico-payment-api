import fs from "fs";
import path from "path";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);

export const logFile = (filename, data) => {
  const filePath = path.join(__dirname, `../logs/${filename}.json`);
  const writeDate = JSON.stringify(data, null, 4);
  fs.writeFileSync(filePath, writeDate);
}

