"use client";

import { signIn } from "next-auth/react";

const SignInButton = ({ id, name }: { id: string; name: string }) => {
  return (
    <button
      type="button"
      onClick={() => signIn(id, { callbackUrl: "/" })}
      className="bg-red-400 p-3 rounded-lg text-white font-semibold hover:bg-red-500 transition-colors duration-200"
    >
      Sign in with {name}
    </button>
  );
};

export default SignInButton;
