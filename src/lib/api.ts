"use server";

import { prisma } from "./prisma";

export const fetchSettings = async () => {
	const settings = await prisma.settings.findFirst();
	if (!settings) throw new Error("Failed to fetch settings");
	return settings;
};
