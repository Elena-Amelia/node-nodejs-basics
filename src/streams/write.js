import fs from "node:fs";
import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToWrite.txt");
const writeableStream = fs.createWriteStream(filePath);

const write = async () => {
  console.log(
    "Please input text" + "\n" + "Use Ctrl+C combination to stop" + "\n"
  );

  process.stdin.on("data", (chunk) => {
    writeableStream.write(chunk);
  });
  process.stdin.on("error", (err) => process.stderr.write(err.message));
};

await write();
