const valueOfKey = <X, Y extends keyof X>(obj: X, key: Y) => {
  return obj[key];
};

const obj = {
  name: "shuvo",
  age: 20,
  phone: 17333434343,
};

console.log(valueOfKey(obj, "name"));
