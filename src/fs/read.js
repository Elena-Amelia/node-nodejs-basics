import fs from "node:fs";
import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  fs.readFile(
    path.join(__dirname, "files", "fileToRead.txt"),
    "utf8",
    (err, data) => {
      if (err) throw new Error("FS operation failed");
      console.log(data);
    }
  );
};

await read();
