import fs from "node:fs";
import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
  fs.readdir(path.join(__dirname, "files"), (err, files) => {
    if (err) throw new Error("FS operation failed");
    console.log(files);
  });
};

await list();
