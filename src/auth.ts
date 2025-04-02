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
		// async redirect({ url, baseUrl }) {
		// 	console.log("url", url);
		// 	console.log("baseUrl", baseUrl);

		// 	return url.startsWith(baseUrl) ? url : baseUrl + "/protected/client";
		// },
		// authorized: async ({ auth }) => {
		// 	// Logged in users are authenticated, otherwise redirect to login page
		// 	return !!auth;
		// },
	},
});
