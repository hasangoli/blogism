"use server";

import { signIn, signOut } from "@/auth";
import { User } from "../../generated/prisma";
import { prisma } from "./prisma";

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

// Dashboard Actions
export const updateProfile = async (data: Partial<User>) => {
	console.log(data);
};
