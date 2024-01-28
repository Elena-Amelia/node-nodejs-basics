import fs from "node:fs";
import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const oldFilePath = path.join(__dirname, "files", "wrongFilename.txt");
const newFilePath = path.join(__dirname, "files", "properFilename.md");

const rename = async () => {
  fs.rename(oldFilePath, newFilePath, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
};

await rename();
