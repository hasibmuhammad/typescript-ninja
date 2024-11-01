// Generic Name < Generic Type >
type GenericArray<T> = Array<T>;

const rollNumbers: GenericArray<number> = [1, 2, 3];
const mentors: GenericArray<string> = ["shuvo", "Akash"];
const boolArray: GenericArray<boolean> = [true, false, true];

// users
const users: GenericArray<{ name: string; age: number }> = [
  { name: "shuvo", age: 1000 },
  { name: "shuvo", age: 130 },
];
console.log(users);

// another array of object
const players: GenericArray<{ name: string; status: "Playing" | "Retired" }> = [
  {
    name: "Hashim Amla",
    status: "Playing",
  },
  {
    name: "Virat Kohli",
    status: "Playing",
  },
  {
    name: "Jack Kallies",
    status: "Retired",
  },
];
console.log(players);
