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
