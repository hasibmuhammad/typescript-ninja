const sum = (...args: number[]): number => {
  return args.reduce((prev: number, curr: number) => prev + curr, 0);
};

console.log(sum(1, 2, 3));
