import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { SearchDialog } from "./search-dialog";
import { ThemeToggle } from "./theme-toggle";

const menuItems = [
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
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost">
								<Menu />
							</Button>
						</SheetTrigger>
						<SheetContent className="pt-8">
							<SheetHeader>
								<SheetTitle className="text-center">LOGO</SheetTitle>
							</SheetHeader>
							<nav className="px-4">
								<ul className="flex flex-col gap-2">
									{menuItems.map(item => (
										<li
											key={item.url}
											className="p-2 border-border border-[1px] rounded-md text-sm">
											<Link href={item.url}>{item.title}</Link>
										</li>
									))}
									<li className="mt-4">
										<Button className="w-full" asChild>
											<Link href="/">ورود / عضویت</Link>
										</Button>
									</li>
								</ul>
							</nav>
						</SheetContent>
					</Sheet>
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
