"use client";

import { useSession } from "next-auth/react";

type Props = {
  children: React.ReactNode;
};
const MainContainer = ({ children }: Props) => {
  const { data: session } = useSession();

  return (
    <main
      className={`grid grid-cols-1 ${
        session ? "lg:grid-cols-3 lg:max-w-6xl" : "lg:grid-cols-2 lg:max-w-3xl"
      } lg:grid-flow-row-dense mx-auto`}
    >
      {children}
    </main>
  );
};

export default MainContainer;
