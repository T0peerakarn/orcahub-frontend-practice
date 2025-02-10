"use client";

import { useEffect, useState } from "react";

import { useParams, notFound } from "next/navigation";

import { lessons } from "@/constants/lessons";

const LessonPage: React.FC = () => {
  const [LessonComponent, setLessonComponent] =
    useState<React.ComponentType | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const lesson = lessons.find((l) => l.id === +(id as string));

    if (!lesson) {
      notFound();
    }

    setLessonComponent(() => lesson.component);
  }, [id]);

  return LessonComponent && <LessonComponent />;
};

export default LessonPage;
