import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import type { NextAuthOptions } from "next-auth";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET as string;
const PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string;
const CLIENT_EMAIL = process.env.FIREBASE_CLIENT_EMAIL as string;
const PRIVATE_KEY: string = JSON.parse(
  process.env.FIREBASE_PRIVATE_KEY as string
).privateKey;

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: PROJECT_ID,
      clientEmail: CLIENT_EMAIL,
      privateKey: PRIVATE_KEY,
    }),
  }),
  pages: {
    signIn: "/auth/signin",
  },
  secret: NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, user }) {
      session.user.username = user.name
        ?.split(" ")
        .join("")
        .toLocaleLowerCase() as string;
      session.user.uid = user.id as string;
      return session;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
