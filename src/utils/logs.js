import fs from "fs";
import path from "path";

export const logFile = (filename, data) => {
  const filePath = path.join(__dirname, `../logs/${filename}.json`);
  const writeDate = JSOn.stringify(data, null, 4);
  fs.writeFileSync(filePath, writeDate);
}

logFile("test",{
  test:1,
  name: "BURAK"
});