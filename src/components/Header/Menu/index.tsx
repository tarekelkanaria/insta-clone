import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import AddPost from "./AddPost";
import HeaderProfile from "./HeaderProfile";
import HeaderSignin from "./HeaderSignin";

export default async function Menu() {
  const session = await getServerSession(authOptions);

  return (
    <li className="flex items-center space-x-4">
      <Link href="/">
        <AiFillHome className="hidden md:inline-flex text-2xl cursor-pointer hover:scale-125 transition-transform duration-200" />
      </Link>
      {session ? (
        <>
          <AddPost />
          <HeaderProfile />
        </>
      ) : (
        <HeaderSignin />
      )}
    </li>
  );
}
