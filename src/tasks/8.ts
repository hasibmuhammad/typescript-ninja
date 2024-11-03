// intersection type
type AdminUser = User & Admin;

type User = {
  name: string;
  email: string;
};
type Admin = {
  adminLevel: string;
};

const describeAdmin = (user: AdminUser): string => {
  return `Hello, ${user?.name}. Your email is: ${user?.email} and your level of admin is : ${user?.adminLevel}`;
};

console.log(
  describeAdmin({ name: "Akash", email: "akash@gmail.com", adminLevel: "CD" })
);
