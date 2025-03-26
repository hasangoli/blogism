// import { Separator } from "@/components/ui/separator";
// import Image from "next/image";
import Link from "next/link";
// import { Fragment } from "react";
// import { CategoryItem, CategoryType } from "../blogs/category-item";
import { links } from "@/constants";
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";
import { Logo } from "./logo";
import { Settings } from "../../../generated/prisma";

export const Footer = ({ settings }: { settings: Settings }) => {
	return (
		<footer className="container">
			<div className="grid grid-cols-2 md:grid-cols-10 gap-12 py-12">
				<div className="col-span-2 md:col-span-10 lg:col-span-3">
					<Logo
						logo={settings?.footerLogo}
						darkLogo={settings?.footerDarkLogo}
						name={settings?.siteName}
						className="h-[50px] mb-4"
					/>
					<p className="text-justify text-sm">{settings?.description}</p>
				</div>
				<div className="col-span-2 md:col-span-5 lg:col-span-3">
					<h4 className="inline-block pb-2 border-b-[1px] border-border text-bold mb-4">
						دسته بندی ها
					</h4>
					<ul className="flex flex-wrap h-7 gap-3">
						{/* {data.categories.map((category: CategoryType, index: number) => (
							<Fragment key={category.slug}>
								{index ? <Separator orientation="vertical" /> : null}
								<li>
									<CategoryItem category={category} />
								</li>
							</Fragment>
						))} */}
					</ul>
				</div>
				<div className="md:col-span-2 lg:col-span-2">
					<h4 className="inline-block pb-2 border-b-[1px] border-border text-bold mb-4">
						دسترسی سریع
					</h4>
					<ul className="text-sm flex flex-col gap-2">
						{links.map(link => (
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
						{settings?.twitter ? (
							<li>
								<a href={settings?.twitter}>
									<Twitter />
								</a>
							</li>
						) : null}
						{settings?.facebook ? (
							<li>
								<a href={settings?.facebook}>
									<Facebook />
								</a>
							</li>
						) : null}
						{settings?.instagram ? (
							<li>
								<a href={settings?.instagram}>
									<Instagram />
								</a>
							</li>
						) : null}
						{settings?.linkedIn ? (
							<li>
								<a href={settings?.linkedIn}>
									<Linkedin />
								</a>
							</li>
						) : null}
						{settings?.telegram ? (
							<li>
								<a href={settings?.telegram}>
									<Send />
								</a>
							</li>
						) : null}
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
