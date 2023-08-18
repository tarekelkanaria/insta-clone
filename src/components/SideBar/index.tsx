"use client";

import { useSession } from "next-auth/react";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import SideBarPlaceholders from "../UI/LoadingPlaceholders/SideBarPlaceholders";

const SideBar = () => {
  const { data: session, status } = useSession();

  return (
    <>
      {status === "loading" && <SideBarPlaceholders />}
      {status === "authenticated" && (
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
