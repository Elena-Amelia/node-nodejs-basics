import { Transform } from "node:stream";
import { EOL } from "node:os";

const input = process.stdin;
const output = process.stdout;

const reverseString = new Transform({
  transform(chunk, encoding, callback) {
    callback(
      null,
      String(chunk).slice(0, -1).split("").reverse().join("") + EOL
    );
  },
});

const transform = async () => {
  console.log(
    "Please input text to reverse" +
      "\n" +
      "Use Ctrl+C combination to stop" +
      "\n"
  );
  input.pipe(reverseString).pipe(output);
};

await transform();
