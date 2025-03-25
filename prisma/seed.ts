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
			headerLogo: "/images/black.png",
			headerDarkLogo: "/images/white.png",
			footerLogo: "/images/black.png",
			footerDarkLogo: "/images/white.png",
			description:
				"ما در بلاگیسم فضایی برای به اشتراک‌گذاری ایده‌ها، تجربیات و دانش ایجاد کرده‌ایم. هدف ما انتشار محتوای ارزشمند و الهام‌بخش برای خوانندگان است. شما نیز می‌توانید با ما همراه شوید و دیدگاه‌های خود را به اشتراک بگذارید!",
			twitter: "blogism",
			linkedIn: "blogism",
			facebook: "blogism",
			instagram: "blogism",
			telegram: "blogism",
			siteName: "بلاگیسم",
			homeTitle: "بلاگیسم",
			homeSubTitle: "برترین پلتفرم فارسی زبان برای انتشار محتوا و مقالات شما",
			contactTitle: "تماس با ما",
			contactSubTitle: "جهت ارتباط با ما لطفا پیام خود را ارسال فرمایید",
			email: "support@blogism.com",
			phone: "09123456789",
		},
	});

	console.log({ admin, settings });
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
