import { spawn } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { stdin, stdout } from "node:process";

const childPath = join(
  dirname(fileURLToPath(import.meta.url)),
  "files",
  "script.js"
);

const spawnChildProcess = async (args) => {
  const child = spawn("node", [childPath, ...args]);
  stdin.pipe(child.stdin);
  child.stdout.pipe(stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, 3]);
