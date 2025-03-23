import { Separator } from "@/components/ui/separator";
import { Github, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";
import { CategoryItem, CategoryType } from "../blogs/category-item";

const data = {
	logo: "LOGO",
	about:
		"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،",
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

export const Footer = () => {
	return (
		<footer className="container">
			<div className="grid grid-cols-2 md:grid-cols-10 gap-12 py-12">
				<div className="col-span-2 md:col-span-10 lg:col-span-3">
					<h2 className="text-3xl font-extrabold mb-4">{data.logo}</h2>
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
