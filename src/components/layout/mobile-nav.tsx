"use client";

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
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { menuItems } from "./header";

export const MobileNav = () => {
	const pathName = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(false);
	}, [pathName]);

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
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
	);
};
