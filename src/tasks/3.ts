type Person = {
  name: string;
  hairColor: string;
  eyeColor: string;
  income: number;
  expense: number;
  hobbies: string[];
  familyMembers: FamilyMember[];
  job: Job;
  skills: string[];
  matarialStatus: "Married" | "Unmarried" | "Divorced" | "Widowed";
  friends: Friend[];
};

type FamilyMember = {
  name: string;
  relation: string;
  age: number;
};

type Job = {
  title: string;
  company: string;
  yearsOfExperience: number;
};

type Friend = {
  name: string;
  contactInfo: string;
  closenessLevel: "Close" | "Casual" | "Acquaintance";
};
