import { createWriteStream } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, "files", "fileToWrite.txt");
const writeableStream = createWriteStream(filePath);

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
