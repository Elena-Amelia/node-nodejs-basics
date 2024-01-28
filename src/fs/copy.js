import fs from "node:fs";
import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filesPath = path.join(__dirname, "files");
const filesCopyPath = path.join(__dirname, "files_copy");

const copy = async () => {
  fs.readdir(filesPath, (err, files) => {
    if (err) throw new Error("FS operation failed");
    else {
      createCopyFolder();
      files.forEach((file) => {
        fs.copyFile(
          path.join(filesPath, file),
          path.join(filesCopyPath, file),
          (err) => {
            if (err) throw err;
          }
        );
      });
    }
  });
};

function createCopyFolder() {
  fs.mkdir(filesCopyPath, (err) => {
    if (err) throw new Error("FS operation failed");
    // console.log("Folder was created");
  });
}

await copy();
