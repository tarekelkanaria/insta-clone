"use client";

import { useSession } from "next-auth/react";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";

const SideBar = () => {
  const { data: session } = useSession();

  return (
    <>
      {session && (
        <section className="fixed w-80 xl:w-[380px]">
          <MiniProfile
            image={session?.user.image as string}
            username={session?.user.username}
          />
          <Suggestions />
        </section>
      )}
    </>
  );
};

export default SideBar;
