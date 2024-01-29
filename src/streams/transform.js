import { Transform } from "node:stream";
import os from "node:os";

const input = process.stdin;
const output = process.stdout;

const reverseString = new Transform({
  transform(chunk, encoding, callback) {
    callback(
      null,
      String(chunk).slice(0, -1).split("").reverse().join("") + os.EOL
    );
  },
});

const transform = async () => {
  input.pipe(reverseString).pipe(output);
};

await transform();
