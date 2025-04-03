import { any, object, string } from "zod";

export const profileSchema = object({
	name: string().min(1, { message: "نام و نام خانوادگی الزامی است" }),
	image: any(),
	description: string().optional(),
	twitter: string().optional(),
	linkedIn: string().optional(),
	facebook: string().optional(),
	instagram: string().optional(),
	telegram: string().optional(),
});
