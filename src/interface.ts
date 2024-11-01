type UserWithRole = {
  name: string;
  role: "admin" | "user";
};

type UserWithRoleAndAge = UserWithRole & { age: number };

const user1: UserWithRole = {
  name: "Shuvo",
  role: "admin",
};

const user2: UserWithRoleAndAge = {
  name: "Akash",
  role: "admin",
  age: 19,
};

// Normal Student
interface Student {
  name: string;
  id: number;
  class: string;
}

// Pro Student
interface ProStudent extends Student {
  proAccountId: number;
  role: "pro";
}

const normalStudent: Student = {
  name: "akash",
  id: 12394,
  class: "seven",
};

const proStudentWithPower: ProStudent = {
  class: "seven",
  id: 134333,
  name: "Jawal",
  proAccountId: 393939,
  role: "pro",
};
