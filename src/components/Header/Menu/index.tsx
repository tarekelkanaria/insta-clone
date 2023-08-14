"use client";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";

const Menu = () => {
  const { data: session } = useSession();

  return (
    <li className="flex items-center space-x-4">
      <AiFillHome className="hidden md:inline-flex text-2xl cursor-pointer hover:scale-125 transition-transform duration-200" />
      {session ? (
        <>
          <FiPlusCircle className="text-2xl cursor-pointer hover:scale-125 transition-transform duration-200" />
          <Image
            alt="User profile image"
            src={session.user?.image as string}
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
            onClick={() => signOut()}
          />
        </>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </li>
  );
};

export default Menu;
