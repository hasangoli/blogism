import { Separator } from "@/components/ui/separator";
import { Settings } from "@/type";
import { Github, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { CategoryItem, CategoryType } from "../blogs/category-item";

const data = {
	logo: "LOGO",
	about:
		"ما در بلاگیسم فضایی برای به اشتراک‌گذاری ایده‌ها، تجربیات و دانش ایجاد کرده‌ایم. هدف ما انتشار محتوای ارزشمند و الهام‌بخش برای خوانندگان است. شما نیز می‌توانید با ما همراه شوید و دیدگاه‌های خود را به اشتراک بگذارید!",
	categories: [
		{ name: "تکنولوژی", slug: "test1" },
		{ name: "خدمات", slug: "test2" },
		{ name: "علمی", slug: "test3" },
		{ name: "صنعت", slug: "test4" },
	],
	links: [
		{ title: "خانه", url: "/" },
		{ title: "مقالات", url: "/blogs" },
		{ title: "نویسندگان", url: "/authors" },
		{ title: "تماس با ما", url: "/contact" },
	],
	socials: [
		{ icon: "instagram", url: "instagram.com" },
		{ icon: "youtube", url: "youtube.com" },
		{ icon: "linkedin", url: "linkedin.com" },
		{ icon: "github", url: "github.com" },
	],
};

const socialIcon = (key: string) => {
	switch (key) {
		case "instagram":
			return <Instagram size={20} />;

		case "youtube":
			return <Youtube size={20} />;

		case "linkedin":
			return <Linkedin size={20} />;

		case "github":
			return <Github size={20} />;

		default:
			break;
	}
};

export const Footer = ({ settings }: { settings: Settings; }) => {
	console.log('settings: ', settings);
	
	return (
		<footer className="container">
			<div className="grid grid-cols-2 md:grid-cols-10 gap-12 py-12">
				<div className="col-span-2 md:col-span-10 lg:col-span-3">
					<Link href="/" className="block relative aspect-video h-[50px] mb-4">
						<Image
							src="/images/black.png"
							alt=""
							fill
							className="object-contain object-center dark:hidden"
						/>
						<Image
							src="/images/white.png"
							alt=""
							fill
							className="object-contain object-center hidden dark:block"
						/>
					</Link>
					<p className="text-justify text-sm">{data.about}</p>
				</div>
				<div className="col-span-2 md:col-span-5 lg:col-span-3">
					<h4 className="inline-block pb-2 border-b-[1px] border-border text-bold mb-4">
						دسته بندی ها
					</h4>
					<ul className="flex flex-wrap h-7 gap-3">
						{data.categories.map((category: CategoryType, index: number) => (
							<Fragment key={category.slug}>
								{index ? <Separator orientation="vertical" /> : null}
								<li>
									<CategoryItem category={category} />
								</li>
							</Fragment>
						))}
					</ul>
				</div>
				<div className="md:col-span-2 lg:col-span-2">
					<h4 className="inline-block pb-2 border-b-[1px] border-border text-bold mb-4">
						دسترسی سریع
					</h4>
					<ul className="text-sm">
						{data.links.map(link => (
							<li key={link.url}>
								<Link href={link.url}>{link.title}</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="md:col-span-3 lg:col-span-2">
					<h4 className="inline-block pb-2 border-b-[1px] border-border text-bold mb-4">
						شبکه های اجتماعی
					</h4>
					<ul className="flex flex-wrap gap-x-3">
						{data.socials.map(social => (
							<li key={social.url}>
								<a href={social.url}>{socialIcon(social.icon)}</a>
							</li>
						))}
					</ul>
				</div>
			</div>

			<p className="text-center text-sm border-t-[1px] border-border py-3">
				تمامی حقوق محفوظ است،{" "}
				{new Intl.DateTimeFormat("fa-IR", {
					year: "numeric",
				}).format(new Date())}{" "}
				©
			</p>
		</footer>
	);
};
