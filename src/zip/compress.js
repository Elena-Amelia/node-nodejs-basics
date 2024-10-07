import { createReadStream, createWriteStream } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = createReadStream(join(__dirname, "files", "fileToCompress.txt"));
const output = createWriteStream(join(__dirname, "files", "archive.gz"));

const compress = async () => {
  pipeline(input, createGzip(), output, (err) => {
    if (err) console.log(err.message);
  });
};

await compress();
