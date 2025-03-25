import { Settings } from "@/type";
import Link from "next/link";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { SearchDialog } from "./search-dialog";
import { ThemeToggle } from "./theme-toggle";

export const menuItems = [
	{ title: "خانه", url: "/" },
	{ title: "مقالات", url: "/blogs" },
	{ title: "نویسندگان", url: "/authors" },
	{ title: "تماس با ما", url: "/contact" },
];

export const Header = ({ settings }: { settings: Settings }) => {
	return (
		<header className="sticky top-0 bg-background z-50 py-4 border-border border-b-[1px]">
			<div className="container grid grid-cols-3 items-center">
				<div className="text-start md:hidden">
					<MobileNav settings={settings} />
				</div>
				<div className="md:col-span-2 flex items-center justify-center md:justify-start">
					<Logo
						logo={settings?.headerLogo}
						darkLogo={settings?.headerDarkLogo}
						name={settings?.siteName}
						className="h-[30px]"
					/>
					<nav className="hidden md:block ms-5 text-sm">
						<ul className="flex items-center gap-x-3">
							{menuItems.map(item => (
								<li key={item.url}>
									<Link href={item.url}>{item.title}</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
				<div className="flex items-center justify-end">
					<SearchDialog />
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
};
