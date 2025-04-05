"use server";

import { signIn, signOut } from "@/auth";
import * as fs from "fs";
import path from "path";
import { z } from "zod";
import { prisma } from "./prisma";
import { profileSchema } from "./zod";

const UPLOAD_DIR = path.resolve(process.env.ROOT_PATH ?? "", "public");

export const fetchSettings = async () => {
	const settings = await prisma.settings.findFirst();

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
	if (!user)
		return {
			success: false,
			message: "کاربری یافت نشد",
		};

	try {
		if (image) {
			const fileName = Date.now();

			const buffer = await (image as unknown as File[])?.[0].arrayBuffer();

			if (!fs.existsSync(UPLOAD_DIR)) {
				fs.mkdirSync(UPLOAD_DIR);
			}
			fs.writeFileSync(
				`${UPLOAD_DIR}/uploads/${fileName}.png`,
				Buffer.from(buffer)
			);

			updatedImage = `${UPLOAD_DIR}/uploads/${fileName}.png`.split("public")[1];

			if (fs.existsSync(`${UPLOAD_DIR}/${user.image}`)) {
				fs.unlinkSync(`${UPLOAD_DIR}/${user.image}`);
			}
		}

		const updatedUser = await prisma.user.update({
			where: { id },
			data: {
				name,
				image: updatedImage || user.image,
				description,
				twitter,
				facebook,
				instagram,
				linkedIn,
				telegram,
			},
		});

		return {
			success: true,
			message: "به روز رسانی انجام شد",
			user: updatedUser,
		};
	} catch (err) {
		console.log(err);
		return {
			success: false,
			// message: "خطا در به روز رسانی اطلاعات",
			message: `${err}`,
		};
	}
};
