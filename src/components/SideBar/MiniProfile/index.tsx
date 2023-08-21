"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const MiniProfile = () => {
  const { data: session } = useSession();
  return (
    <article className="flex items-center justify-between ml-5 mb-4">
      <Image
        src={session?.user.image as string}
        alt={session?.user.username as string}
        height={64}
        width={64}
        priority={true}
        style={{ maxWidth: "64px", height: "auto" }}
        className="rounded-full border p-0.5 object-contain"
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
    </article>
  );
};

export default MiniProfile;
