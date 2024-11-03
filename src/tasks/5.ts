// const reverseString = (str: string): string => {
//   let newAr = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     newAr.push(str[i]);
//   }

//   return newAr.join("");
// };

const reverseString = (str: string) => {
  return str.split("").reverse().join("");
};

console.log(reverseString("amazing"));
