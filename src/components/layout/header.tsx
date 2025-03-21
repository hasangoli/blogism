
import Link from "next/link";
import { SearchDialog } from "./search-dialog";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";

export const menuItems = [
	{ title: "خانه", url: "/" },
	{ title: "مقالات", url: "/blogs" },
	{ title: "نویسندگان", url: "/authors" },
	{ title: "تماس با ما", url: "/contact" },
];

export const Header = () => {
	return (
		<header className="container py-4">
			<div className="grid grid-cols-3 items-center">
				<div className="text-start md:hidden">
					<MobileNav/>
				</div>
				<div className="md:col-span-2 flex items-center justify-center md:justify-start">
					<h2>LOGO</h2>
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
