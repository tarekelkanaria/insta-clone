import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.username = session.user?.name
        ?.split(" ")
        .join("")
        .toLocaleLowerCase() as string;
      session.user.uid = token.sub as string;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
