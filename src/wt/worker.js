import { workerData, parentPort } from "node:worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

//for testing
// if (Math.random() > 0.5) throw new Error("Testing error!");

const sendResult = () => {
  parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();
