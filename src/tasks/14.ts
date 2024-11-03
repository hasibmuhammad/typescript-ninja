{
  type User = {
    name: string;
    age: number;
  };

  const fetchUserData = async (): Promise<User> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: "John Doe", age: 23 });
      }, 3000);
    });
  };

  fetchUserData().then((user) => console.log(user.name, user.age));
}
