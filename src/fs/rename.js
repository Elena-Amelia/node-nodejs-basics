import { stat, rename as rn } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const oldFilePath = join(__dirname, "files", "wrongFilename.txt");
const newFilePath = join(__dirname, "files", "properFilename.md");

const rename = async () => {
  stat(newFilePath, (err) => {
    if (err) {
      rn(oldFilePath, newFilePath, (e) => {
        if (e) {
          throw new Error("FS operation failed");
        }
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};

await rename();
