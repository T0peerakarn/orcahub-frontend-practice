import StateManagementLesson from "@/components/Lessons/StateManagementLesson";

export interface ILesson {
  id: number;
  title: string;
  component: React.FC;
}

export const lessons: ILesson[] = [
  {
    id: 1,
    title: "State Management",
    component: StateManagementLesson,
  },
];
