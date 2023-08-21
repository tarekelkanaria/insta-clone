import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import MiniProfile from "./MiniProfile";
import Suggestions from "./Suggestions";
import SideBarPlaceholders from "../UI/LoadingPlaceholders/SideBarPlaceholders";

export default async function SideBar() {
  const session = await getServerSession(authOptions);
  return (
    <>
      {!session && <SideBarPlaceholders />}
      {session && (
        <section className="fixed w-80 xl:w-[380px]">
          <MiniProfile />
          <Suggestions />
        </section>
      )}
    </>
  );
}
