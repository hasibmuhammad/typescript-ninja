// Never type
const handleError = (message: string): never => {
  throw new Error(message);
};

try {
  handleError("hello world");
} catch (error) {
  console.log(error);
}
