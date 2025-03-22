import Image from "next/image";
import Link from "next/link";

export type BlogsAuthorType = {
	href: string;
	src: string;
	fullName: string;
	dimension?: number;
};

export const BlogsAuthor = ({
	href,
	src,
	fullName,
	dimension = 25,
}: BlogsAuthorType) => {
	return (
		<Link href={href} className="flex items-center gap-1">
			<Image
				src={src}
				alt={fullName}
				width={dimension}
				height={dimension}
				className="aspect-square object-center object-cover rounded-full border-2 border-border"
			/>
			<p className="text-xs">{fullName}</p>
		</Link>
	);
};
