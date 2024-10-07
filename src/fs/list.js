import { readdir } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
  let filesArr = [];
  readdir(join(__dirname, "files"), { withFileTypes: true }, (err, files) => {
    if (err) throw new Error("FS operation failed");

    files.forEach((file) => {
      if (!file.isFile()) {
        return;
      } else {
        filesArr.push(file.name);
      }
    });
    console.log(filesArr);
  });
};

await list();
