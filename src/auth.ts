import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";
import { User } from "../generated/prisma";
import { prisma } from "./lib/prisma";

declare module "next-auth" {
	interface Session {
		user: User & DefaultSession["user"];
	}
}

export const { signIn, signOut, auth, handlers } = NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [Google],
	callbacks: {
		async session({ session }) {
			return {
				...session,
				user: {
					...session.user,
				},
			};
		},
	},
});
