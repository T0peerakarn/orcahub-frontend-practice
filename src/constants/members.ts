export interface IMember {
  name: string;
  createdAt: Date;
}

export const members: IMember[] = [
  {
    name: "Peerakarn",
    createdAt: new Date("January 26, 2025"),
  },
];
