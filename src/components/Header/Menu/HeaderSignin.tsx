"use client";

import { signIn } from "next-auth/react";

const HeaderSignin = () => {
  return <button onClick={() => signIn()}>Sign in</button>;
};

export default HeaderSignin;
