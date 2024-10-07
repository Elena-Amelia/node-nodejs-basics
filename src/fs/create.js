import { stat, writeFile } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const create = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const __filePath = join(__dirname, "files", "fresh.txt");

  stat(__filePath, (err) => {
    if (err) {
      writeFile(__filePath, "I am fresh and young", (e) => {
        if (e) throw e;
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};
await create();
