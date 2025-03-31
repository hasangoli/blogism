import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { prisma } from "./lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter"

export const { signIn, signOut, auth, handlers } = NextAuth({
	adapter:PrismaAdapter(prisma),
	providers: [Google],
	callbacks: {
		async session({ session, token, user }) {
			const userData = await prisma.user.findFirst({
				where: { email: session?.user?.email },
			});
			console.log("======== session: ", session);
			console.log("======== token: ", token);
			console.log("======== user: ", user);
			console.log("======== userData: ", userData);

			return session;
		},
	},
});
