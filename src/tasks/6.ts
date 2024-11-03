const sum = (...args: number[]): number => {
  const [first, second, ...rest] = args;
  console.log(first, second, rest);

  return args.reduce((prev: number, curr: number) => prev + curr, 0);
};

console.log(sum(1, 2, 3));
