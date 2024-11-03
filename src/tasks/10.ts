// Nullish coalescing operator or set a default value when the value is null or undefined
const getDisplayName = (name: string | null | undefined): string => {
  return name ?? "Anonymous";
};
console.log(getDisplayName("shuvo"));
