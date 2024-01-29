import fs from "node:fs";
import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = fs.createReadStream(
  path.join(__dirname, "files", "fileToCompress.txt")
);
const output = fs.createWriteStream(
  path.join(__dirname, "files", "archive.gz")
);

const compress = async () => {
  pipeline(input, createGzip(), output, (err) => {
    if (err) console.log(err.message);
  });
};

await compress();
