// type narrowing throw typeof checking
const diff = (input: string | number): number => {
  if (typeof input === "string") {
    return input.length;
  } else {
    {
      return input * input;
    }
  }
};

console.log(diff("shuvo"));
console.log(diff(3));
