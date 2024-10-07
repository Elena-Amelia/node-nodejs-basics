const parseArgs = () => {
  const result = [];
  process.argv.forEach((elem, ind, arr) => {
    if (elem.startsWith("--")) {
      result.push(`${elem.slice(2)} is ${arr[ind + 1]}`);
    }
  });

  console.log(result.join(", "));
};

parseArgs();
