import { spawn } from "node:child_process";
import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { stdin, stdout } from "node:process";

const childPath = path.join(
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
