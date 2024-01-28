import fs from "node:fs";
import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToRead.txt");
const readableStream = fs.createReadStream(filePath, "utf-8");
let fileData = "";

const read = async () => {
  readableStream.on("data", (chunk) => {
    fileData += chunk;
  });
  readableStream.on("end", () => process.stdout.write(fileData + "\n"));
  readableStream.on("error", (err) => {
    process.stderr.write(err.message);
  });
};

await read();
