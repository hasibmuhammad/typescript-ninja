const createPromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
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
    const data: string = await createPromise();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

showData();
