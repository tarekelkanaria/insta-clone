"use client";

import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import { Provider as StateProvider } from "react-redux";
import store from "@/redux/store";

type Props = {
  children: React.ReactNode;
  session: Session | null;
};

const Providers = ({ children, session }: Props) => {
  return (
    <SessionProvider session={session}>
      <StateProvider store={store}>{children}</StateProvider>
    </SessionProvider>
  );
};

export default Providers;
