const genericFunc = <T>(genAr: T[]): T[] => {
  return [...new Set(genAr)];
};

const arrOfString = genericFunc(["a", "b", "a"]);
const arrOfNumber = genericFunc([1, 2, 3, 3, 5, 1, 4, 5]);

console.log(arrOfString);
console.log(arrOfNumber);
