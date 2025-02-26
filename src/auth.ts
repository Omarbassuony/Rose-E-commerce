import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { cookies } from "next/headers";
import { JSON_HEADER } from "./lib/constants/api.constant";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        console.log(credentials);
        const { email, password } = credentials || {};
        const baseUrl = process.env.API + "/auth/signin";

        const response = await fetch(baseUrl, {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            ...JSON_HEADER,
          },
        });

        const payload: APIResponse<LoginResponse> = await response.json();

        if ("message" in payload) {
          cookies().set("accessToken", payload.token, { httpOnly: true });
          return {
            ...payload.user,
            token: payload.token,
          };
        } else {
          throw new Error(payload.error);
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.token = user.token;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.email = user.email;
        token.phone = user.phone;
        token.role = user.role;
      }

      return token;
    },
    session: ({ session, token }) => {
      session.firstName = token.firstName;
      session.lastName = token.lastName;
      session.email = token.email || "";
      session.phone = token.phone;
      session.role = token.role;

      return session;
    },
  },
};
