import { readdir, copyFile, mkdir } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const filesPath = join(__dirname, "files");
const filesCopyPath = join(__dirname, "files_copy");

const copy = async () => {
  readdir(filesPath, (err, files) => {
    if (err) throw new Error("FS operation failed");
    else {
      createCopyFolder();
      files.forEach((file) => {
        copyFile(join(filesPath, file), join(filesCopyPath, file), (err) => {
          if (err) throw err;
        });
      });
    }
  });
};

function createCopyFolder() {
  mkdir(filesCopyPath, (err) => {
    if (err) throw new Error("FS operation failed");
  });
}

await copy();
