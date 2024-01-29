import { readFile } from "node:fs/promises";
import path from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const { createHash } = await import("node:crypto");

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const input = await readFile(filePath);
  const hash = createHash("sha256").update(input).digest("hex");
  console.log(hash);
};

await calculateHash();
