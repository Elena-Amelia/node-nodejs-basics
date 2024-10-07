import { createReadStream } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, "files", "fileToRead.txt");
const readableStream = createReadStream(filePath, "utf-8");
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
