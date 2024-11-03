const isString = (value: unknown): value is string => typeof value === "string";
const isNumber = (value: unknown): value is number => {
  return typeof value === "number";
};

const printUppercaseOrSquare = (value: unknown): void => {
  if (isString(value)) {
    console.log(value.toUpperCase());
  }

  if (isNumber(value)) {
    console.log(value * value);
  }
};

printUppercaseOrSquare(13);
printUppercaseOrSquare("Akash");
