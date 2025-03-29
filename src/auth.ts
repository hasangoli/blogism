import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { prisma } from "./lib/prisma";

export const { handlers, auth, signIn, signOut } = NextAuth({
	pages: {
		signIn: "/auth",
	},
	adapter: PrismaAdapter(prisma),
	providers: [
		Google,
		Credentials({
			credentials: {
				email: {},
				password: {},
			},
			authorize: async credentials => {
				let user = null;

				if (credentials.email && credentials.password) {
					if (
						credentials.email === "admin@blogism.com" &&
						credentials.password === "12345678"
					) {
						user = prisma.user.findUnique({
							where: { email: credentials.email },
						});
					}
				}

				if (!user) {
					throw new Error("Invalid credentials.");
				}

				return user;
			},
		}),
	],
});
