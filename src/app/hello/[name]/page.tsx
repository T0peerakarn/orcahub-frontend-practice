"use client";

import { useParams } from "next/navigation";

const HelloNamePage: React.FC = () => {
  const { name } = useParams();

  return (
    <div className="h-screen flex items-center justify-center">
      <h1 className="text-3xl">Hello {name}!</h1>
    </div>
  );
};

export default HelloNamePage;
