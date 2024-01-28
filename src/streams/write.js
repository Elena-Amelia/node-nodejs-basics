import fs from "node:fs";
import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { exit } from "node:process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToWrite.txt");
const output = fs.createWriteStream(filePath);

const write = async () => {
  process.stdin.on("data", (chunk) => {
    output.write(chunk);
  });
  process.stdin.on("error", (err) => process.stderr.write(err.message));
};

await write();
