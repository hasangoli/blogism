import { any, object, string } from "zod";

const MAX_FILE_SIZE = 0.1 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
	"image/jpeg",
	"image/jpg",
	"image/png",
	"image/webp",
];

export const profileSchema = object({
	id: string(),
	name: string().min(1, { message: "نام و نام خانوادگی الزامی است" }),
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

export const createBlogSchema = object({
	title: string(),
	slug: string(),
	thumbnail: any()
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
		),
	featuredImage: any()
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
		),
	shortDescription: string().optional(),
	content: string(),
	userId: string(),
	categoryId: string(),
});
