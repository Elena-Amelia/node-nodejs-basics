import fs from "node:fs";
import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const create = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const __filePath = path.join(__dirname, "files", "fresh.txt");

  fs.stat(__filePath, (err) => {
    if (err) {
      fs.writeFile(__filePath, "I am fresh and young", (e) => {
        if (e) throw e;
      });
    } else {
      throw new Error("FS operation failed");
    }
  });
};
await create();
