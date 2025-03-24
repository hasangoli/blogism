import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
	providers: [
		Google,
		Credentials({
			credentials: {
				email: {},
				password: {},
			},
			authorize: async credentials => {
				console.log(credentials);
				let user = null;

				// const pwHash = saltAndHashPassword(credentials.password)
				const pwHash = "skjdfo89cnur8u3cow";

				// user = await getUserFromDb(credentials.email, pwHash)
				user = { password: pwHash, email: "" };

				if (!user) {
					throw new Error("Invalid credentials.");
				}

				return user;
			},
		}),
	],
});
