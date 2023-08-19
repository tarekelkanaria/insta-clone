"use client";

import { useAppDispatch } from "@/redux/hooks";
import { opening } from "@/redux/features/uploadModalSlice";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";

const Menu = () => {
  const { data: session } = useSession();
  const dispatch = useAppDispatch();

  return (
    <li className="flex items-center space-x-4">
      <Link href="/">
        <AiFillHome className="hidden md:inline-flex text-2xl cursor-pointer hover:scale-125 transition-transform duration-200" />
      </Link>
      {session ? (
        <>
          <FiPlusCircle
            onClick={() => dispatch(opening())}
            className="text-2xl cursor-pointer hover:scale-125 transition-transform duration-200"
          />
          <Image
            alt={session?.user.username}
            src={session.user?.image as string}
            priority={true}
            width={40}
            height={40}
            className="rounded-full cursor-pointer object-contain"
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
