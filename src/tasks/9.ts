type Employee = {
  name: string;
  address?: {
    city?: string;
    state?: string;
  };
};

const getEmployeeCity = (employee: Employee): string | undefined => {
  return employee?.address?.city;
};

console.log(
  getEmployeeCity({
    name: "",
  })
);
