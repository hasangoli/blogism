"use client";

import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { links } from "@/constants";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Settings } from "../../../generated/prisma";
import { Logo } from "./logo";

export const MobileNav = ({ settings }: { settings: Settings }) => {
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
				<SheetTitle className="flex justify-center p-4">
					<Logo
						logo={settings?.headerLogo}
						darkLogo={settings?.headerDarkLogo}
						name={settings?.siteName}
						className="h-[40px]"
					/>
				</SheetTitle>
				<nav className="px-4">
					<ul className="flex flex-col gap-2">
						{links.map(link => (
							<li
								key={link.url}
								className="p-2 border-border border-[1px] rounded-md text-sm">
								<Link href={link.url}>{link.title}</Link>
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
