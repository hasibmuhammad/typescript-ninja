const processData = (data: unknown): string | number | undefined => {
  if (typeof data === "string") return data.toUpperCase();
  if (typeof data === "number") return data * data;
};

console.log(processData("fksjjf"));
console.log(processData(3434));

const isPalindrome = function (s: string) {
  const cleanString: string = s.replace(/[,: ]/g, "");
  const reversed = cleanString.split("").reverse().join("");
  return cleanString == reversed;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
