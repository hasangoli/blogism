import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
	logo: string;
	darkLogo: string;
	name: string;
	className?: string;
};

export const Logo = ({ logo, darkLogo, name, className }: Props) => {
	return (
		<Link href="/" className={cn("relative aspect-video", className)}>
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
