import { Worker } from "node:worker_threads";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { cpus } from "node:os";

const workerPath = join(dirname(fileURLToPath(import.meta.url)), "worker.js");

const performCalculations = async () => {
  const coresNumber = cpus().length;
  let workers = [];

  const createWorker = (number) => {
    return new Promise((resolve) => {
      const worker = new Worker(workerPath, { workerData: number });
      worker.on("message", (msg) => resolve({ status: "resolved", data: msg }));
      worker.on("error", () => resolve({ status: "error", data: null }));
    });
  };

  for (let i = 0; i < coresNumber; i++) {
    workers.push(createWorker(i + 10));
  }

  const workersResult = await Promise.all(workers);

  console.log(workersResult);
};

await performCalculations();
