import fs from "node:fs";
import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
  let filesArr = [];
  fs.readdir(
    path.join(__dirname, "files"),
    { withFileTypes: true },
    (err, files) => {
      if (err) throw new Error("FS operation failed");

      files.forEach((file) => {
        if (!file.isFile()) {
          return;
        } else {
          filesArr.push(file.name);
        }
      });
      console.log(filesArr);
    }
  );
};

await list();
