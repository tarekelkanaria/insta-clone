"use client";

import { SessionProvider } from "next-auth/react";
import { Provider as StateProvider } from "react-redux";
import store from "@/redux/store";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <StateProvider store={store}>{children}</StateProvider>
    </SessionProvider>
  );
};

export default Providers;
