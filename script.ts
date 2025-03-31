import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
	await prisma.user.create({
		data: {
			email: "admin@blogism.com",
			type: "ADMIN",
			fullName: "ادمین",
			description: "درباره ادمین",
			twitter: "https://twitter.com/admin",
			linkedIn: "https://linkedin.com/admin",
			facebook: "https://facebook.com/admin",
			instagram: "https://instagram.com/admin",
			telegram: "https://telegram.com/admin",
		},
	});

	await prisma.settings.create({
		data: {
			headerLogo: "/images/black.png",
			headerDarkLogo: "/images/white.png",
			footerLogo: "/images/black.png",
			footerDarkLogo: "/images/white.png",
			description:
				"ما در بلاگیسم فضایی برای به اشتراک‌گذاری ایده‌ها، تجربیات و دانش ایجاد کرده‌ایم. هدف ما انتشار محتوای ارزشمند و الهام‌بخش برای خوانندگان است. شما نیز می‌توانید با ما همراه شوید و دیدگاه‌های خود را به اشتراک بگذارید!",
			twitter: "https://twitter.com/blogism",
			linkedIn: "https://linkedIn.com/blogism",
			facebook: "https://facebook.com/blogism",
			instagram: "https://instagram.com/blogism",
			telegram: "https://telegram.com/blogism",
			siteName: "بلاگیسم",
			homeTitle: "بلاگیسم",
			homeSubTitle: "برترین پلتفرم فارسی زبان برای انتشار محتوا و مقالات شما",
			contactTitle: "تماس با ما",
			contactSubTitle: "جهت ارتباط با ما لطفا پیام خود را ارسال فرمایید",
			email: "support@blogism.com",
			phone: "09123456789",
		},
	});
}

main()
	.then(async () => {
		console.log("Admin and settings seeded!");
		await prisma.$disconnect();
	})
	.catch(async e => {
		console.error("Failed to seed data: ", e);
		await prisma.$disconnect();
		process.exit(1);
	});
