import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(): Promise<void> {
	const admin = await prisma.author.upsert({
		where: {
			id: 1,
		},
		update: {},
		create: {
			email: "admin@blogism.com",
			password: "12345678",
			fullName: "ادمین",
			description: "درباره ادمین",
			twitter: "twitter_username",
			linkedIn: "linkedin_username",
			facebook: "facebook_username",
			instagram: "instagram_username",
			telegram: "telegram_username",
		},
	});

	const settings = await prisma.settings.upsert({
		where: {
			id: 1,
		},
		update: {},
		create: {
			headerLogo: "",
			footerLogo: "",
			description: "",
			twitter: "",
			linkedIn: "",
			facebook: "",
			instagram: "",
			telegram: "",
			homeTitle: "",
			homeSubTitle: "",
			contactTitle: "",
			contactSubTitle: "",
			email: "",
			phone: "",
		},
	});

	const category = await prisma.category.upsert({
		where: {
			id: 1,
		},
		update: {},
		create: {
			title: "دسته بندی",
			slug: "دسته-بندی",
		},
	});

	const blog = await prisma.blog.upsert({
		where: {
			id: 1,
		},
		update: {},
		create: {
			title: "مقاله",
			slug: "مقاله",
			authorId: 1,
			categoryId: 1,
			thumbnail: "/images/test.jpg",
			shortDescription: "توضیحات کوتاه مقاله",
			featuredImage: "",
			content: "<h1>محتوای مقاله</h1>",
		},
	});

	console.log({ admin, settings, category, blog });
}

main()
	.then(async (): Promise<void> => {
		await prisma.$disconnect();
	})
	.catch(async e => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
