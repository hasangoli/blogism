import Image from "next/image";
import Link from "next/link";

export type AuthorType = {
	href: string;
	src: string;
	fullName: string;
};

export const AuthorItem = ({ href, src, fullName }: AuthorType) => {
	return (
		<Link href={href} className="flex items-center gap-1">
			<Image
				src={src}
				alt={fullName}
				width={25}
				height={25}
				className="aspect-square object-center object-cover rounded-full"
			/>
			<p className="text-xs">{fullName}</p>
		</Link>
	);
};
