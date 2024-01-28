import fs from "node:fs";
import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  fs.unlink(path.join(__dirname, "files", "fileToRemove.txt"), (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await remove();
