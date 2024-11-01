type Frontend = {
  skills: string[];
  experience: number;
};

type Backend = {
  skills: string[];
  experience: number;
};

type Fullstack = {
  designation: Frontend | Backend;
};

const developer1: Fullstack = {
  designation: {
    experience: 10,
    skills: ["React", "Node"],
  },
};

console.log(developer1);
