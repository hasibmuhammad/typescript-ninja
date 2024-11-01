interface Developer<T, X = null> {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseYear: number;
  };
  smartwatch: T;
  bike?: X;
}

interface SmartWatch {
  brand: string;
  model: string;
  display: string;
  heartTrack?: boolean;
  sleepTrack?: boolean;
}

interface Bike {
  brand: string;
  model: string;
}

const tsDeveloper1: Developer<SmartWatch> = {
  name: "Hasib",
  computer: {
    brand: "Lenovo",
    model: "Ideapad slim 3",
    releaseYear: 2023,
  },
  smartwatch: {
    brand: "Imilab",
    model: "kw66",
    display: "Oled",
  },
};

const tsDeveloper2: Developer<SmartWatch, Bike> = {
  name: "Hasib",
  computer: {
    brand: "Lenovo",
    model: "Ideapad slim 3",
    releaseYear: 2023,
  },
  smartwatch: {
    brand: "Imilab",
    model: "kw66",
    display: "Oled",
    heartTrack: true,
    sleepTrack: true,
  },
  bike: { brand: "Yamaha", model: "R15" },
};
