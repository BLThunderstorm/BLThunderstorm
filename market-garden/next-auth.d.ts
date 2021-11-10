import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /**
       * The user's username.
       */
      name: string;
      /**
       * The user's email.
       */
      email: string;
      /**
       * The user's avatar.
       */
      image: string;
      expires: string;
    };
  }
}
