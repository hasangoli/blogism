import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Fragment } from "react";

const data = {
	logo: "LOGO",
	about:
		"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،",
	categories: [
		{ name: "دسته بندی 1", slug: "test1" },
		{ name: "دسته بندی 2", slug: "test2" },
		{ name: "دسته بندی 3", slug: "test3" },
		{ name: "دسته بندی 4", slug: "test4" },
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

export const Footer = () => {
	return (
		<footer className="container">
			<div className="grid grid-cols-1 gap-12 mb-4">
				<div>
					<h2 className="text-3xl font-extrabold mb-4">{data.logo}</h2>
					<p className="text-justify">{data.about}</p>
				</div>
				<div>
					<h4 className="inline-block pb-2 text-lg border-b-[1px] border-border text-bold mb-4">
						دسته بندی ها
					</h4>
					<ul className="flex flex-wrap h-6 gap-x-3">
						{data.categories.map((category, index) => (
							<Fragment key={index}>
								{index ? <Separator orientation="vertical" /> : null}
								<li>
									<Link href={category.slug}>{category.name}</Link>
								</li>
							</Fragment>
						))}
					</ul>
				</div>
				<div>
					<h4 className="inline-block pb-2 text-lg border-b-[1px] border-border text-bold mb-4">
						دسترسی سریع
					</h4>
					<ul>
						{data.links.map(link => (
							<li key={link.url}>
								<Link href={link.url}>{link.title}</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h4 className="inline-block pb-2 text-lg border-b-[1px] border-border text-bold mb-4">
						شبکه های اجتماعی
					</h4>
					<ul className="flex flex-wrap gap-x-3">
						{data.socials.map(social => (
							<li key={social.url}>
								<Link href={social.url}>{social.icon}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>

			<p className="text-center border-t-[1px] border-border py-3">
				تمامی حقوق محفوظ است،{" "}
				{new Intl.DateTimeFormat("fa-IR", {
					year: "numeric",
				}).format(new Date())}{" "}
				©
			</p>
		</footer>
	);
};
