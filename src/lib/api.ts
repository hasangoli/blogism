"use server";

import { signIn, signOut } from "@/auth";
import * as fs from "fs";
import path from "path";
import { z } from "zod";
import { prisma } from "./prisma";
import { profileSchema } from "./zod";

const UPLOAD_DIR = path.resolve(process.env.ROOT_PATH ?? "", "public/uploads");

export const fetchSettings = async () => {
	const settings = await prisma.settings.findFirst();
	if (!settings) console.log("Failed to fetch settings");
	return settings;
};

export const googleLogIn = async () => {
	await signIn("google", { redirectTo: "/dashboard" });
};

export const googleLogOut = async () => {
	await signOut({ redirectTo: "/" });
};

export const updateProfile = async (data: z.infer<typeof profileSchema>) => {
	const {
		id,
		name,
		image,
		description,
		twitter,
		facebook,
		instagram,
		linkedIn,
		telegram,
	} = data;

	let updatedImage = null;

	const user = await prisma.user.findUnique({ where: { id } });
	if (!user) throw new Error("No user found!");

	try {
		if (image) {
			const buffer = await (image as unknown as File[])?.[0].arrayBuffer();

			if (!fs.existsSync(UPLOAD_DIR)) {
				fs.mkdirSync(UPLOAD_DIR);
			}
			fs.writeFileSync(`${UPLOAD_DIR}/${id}.png`, Buffer.from(buffer));

			updatedImage = `${UPLOAD_DIR}/${id}.png`.split("public")[1];
		}

		// TODO: prisma user update makes the page reload
		const updatedUser = await prisma.user.update({
			where: { id },
			data: {
				name,
				image: updatedImage ? updatedImage : user.image,
				description,
				twitter,
				facebook,
				instagram,
				linkedIn,
				telegram,
			},
		});

		return { success: true, user: updatedUser };
	} catch (err) {
		console.log(err);
		return { success: false, message: "Update failed!" };
	}
};
