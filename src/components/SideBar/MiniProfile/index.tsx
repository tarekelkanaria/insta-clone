"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function MiniProfile() {
  const { data: session } = useSession();

  return (
    <article className="flex items-center justify-between ml-5 mb-4">
      {session && (
        <>
          <Image
            src={session?.user.image as string}
            alt="User Profile Image"
            height={64}
            width={64}
            style={{ width: "auto" }}
            className="rounded-full border p-0.5"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-bold whitespace-nowrap">
              {session?.user.username}
            </h2>
            <h3 className="text-sm text-gray-400 whitespace-nowrap">
              Welcome to Instagram
            </h3>
          </div>
          <button
            onClick={() => signOut()}
            className="text-sm font-semibold text-blue-400 whitespace-nowrap"
          >
            Sign out
          </button>
        </>
      )}
    </article>
  );
}
