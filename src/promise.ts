const createPromise = () => {
  return new Promise((resolve, reject) => {
    const data: string = "";

    if (data) {
      return resolve(data);
    } else {
      return reject("failed to resolves");
    }
  });
};

const showData = async () => {
  try {
    const data = await createPromise();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

showData();
