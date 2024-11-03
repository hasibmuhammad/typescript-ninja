type RoleType = "admin" | "user" | "guest";
const info = (name: string, age: number, role: RoleType) => {
  console.log(`Welcome ${name}. You are today ${age}. Your role is: ${role}`);
};

info("Shuvo", 10, "admin");
info("Hasib", 30, "guest");


