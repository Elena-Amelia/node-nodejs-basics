import { readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const { createHash } = await import("node:crypto");

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  const input = await readFile(filePath);
  const hash = createHash("sha256").update(input).digest("hex");
  console.log(hash);
};

await calculateHash();
