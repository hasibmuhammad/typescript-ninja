interface Book {
  title: string;
  author: string;
  isbn: string;
  language: string;
  publisher: string;
}

interface Magazine {
  genre: string;
}

type BookOrMagazine = Book | Magazine;
type BookAndMagazine = Book & Magazine;

const book1: BookOrMagazine = {
  author: "Shuvo",
  isbn: "isbn-13j3j3",
  language: "english",
  title: "title",
  publisher: "",
};

const book2: BookAndMagazine = {
  author: "Shuvo",
  isbn: "isbn-13j3j3",
  language: "english",
  title: "title",
  publisher: "",
  genre: "",
};
