import { any, object, string } from "zod";

const MAX_FILE_SIZE = 0.1 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
	"image/jpeg",
	"image/jpg",
	"image/png",
	"image/webp",
];

export const profileSchema = object({
	name: string().min(1, { message: "نام و نام خانوادگی الزامی است" }),
	// image: instanceof_(File)
	image: any()
		.refine(
			files =>
				ACCEPTED_IMAGE_TYPES.includes(
					(files as unknown as FileList)?.[0]?.type
				),
			"فرمت های قابل بارگذاری: .jpeg, .jpg, .png, .webp"
		)
		.refine(
			files => (files as unknown as FileList)?.[0]?.size <= MAX_FILE_SIZE,
			"حجم فایل نمی‌تواند بیش از ۱۰۰ کیلوبایت باشد"
		)
		.optional(),
	description: string().optional(),
	twitter: string().optional(),
	linkedIn: string().optional(),
	facebook: string().optional(),
	instagram: string().optional(),
	telegram: string().optional(),
});
