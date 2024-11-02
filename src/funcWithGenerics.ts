const createArr = (param: string): string[] => {
  return [param];
};

const createArrWithGeneric = <T>(param: T): T[] => {
  return [param];
};

const res1 = createArr("Bangladesh");
const resGeneric = createArrWithGeneric<boolean>(false);
const resGeneric2 = createArrWithGeneric<string>("Bangladesh");
const resGeneric3 = createArrWithGeneric<{ name: string; id: number }>({
  name: "shuvo",
  id: 223,
});

const addCourseToStudent = <T>(student: T) => {
  const course = "New Course";
  return {
    ...student,
    course,
  };
};

const student1 = addCourseToStudent({ name: "hasib", age: 20 });
const student2 = addCourseToStudent({
  name: "hasib",
  age: 20,
  phone: 1798133006,
});

console.log(student1, student2);

// more exaples
const addPerson = <
  T extends {
    name: string;
    age: number;
    hasSmartWatch?: boolean;
    isActive?: boolean;
  }
>(
  attriutes: T
) => {
  return {
    ...attriutes,
  };
};

const person1 = addPerson({ name: "Akash", age: 20, hasSmartWatch: true });
const person2 = addPerson({
  name: "Mahmud",
  age: 30,
  hasSmartWatch: false,
  isActive: false,
});

console.log(person1, person2);

const newUsers = {
  name: "shuvo",
  age: 22,
};

const addUser = <X, Y extends keyof X>(users: X, key: Y) => {
  return users[key];
};

const newUser1 = addUser(newUsers, "name");

console.log(newUser1);
