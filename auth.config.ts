import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export const authConfig: NextAuthConfig = {
  providers: [Google],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      if (nextUrl.pathname === "/login") {
        if (isLoggedIn) {
          return Response.redirect(new URL("/", nextUrl));
        }
        return true;
      }

      if (!isLoggedIn) {
        return Response.redirect(new URL("/login", nextUrl));
      }

      return true;
    },
    // async signIn({ user, account }) {
    //   await dbConnect();

    //   const existingUser = await User.findOne({ email: user.email });

    //   if (!existingUser) {
    //     await User.create({
    //       name: user.name,
    //       email: user.email,
    //       image: user.image,
    //       googleId: account?.providerAccountId,
    //     });
    //   }

    //   return true;
    // },
  },
  session: {
    strategy: "jwt",
  },
};
