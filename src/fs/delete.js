import { unlink } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  unlink(join(__dirname, "files", "fileToRemove.txt"), (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await remove();
