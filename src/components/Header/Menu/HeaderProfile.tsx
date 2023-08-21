"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const HeaderProfile = () => {
  const { data: session } = useSession();
  return (
    <Image
      alt={session?.user.username as string}
      src={session?.user.image as string}
      priority={true}
      width={40}
      height={40}
      className="rounded-full cursor-pointer object-contain"
      onClick={() => signOut()}
    />
  );
};

export default HeaderProfile;
