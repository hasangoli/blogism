import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
	logo: string;
	darkLogo: string;
	name: string;
	className?: string;
	target?: HTMLAnchorElement["target"];
};

export const Logo = ({
	logo,
	darkLogo,
	name,
	className,
	target = "_self",
}: Props) => {
	return (
		<Link
			href="/"
			className={cn("block relative aspect-video", className)}
			target={target}>
			<Image
				src={logo}
				alt={name}
				fill
				className="object-contain object-center dark:hidden"
			/>
			<Image
				src={darkLogo}
				alt={name}
				fill
				className="object-contain object-center hidden dark:block"
			/>
		</Link>
	);
};
