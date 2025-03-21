import Link from "next/link";

export type TagType = {
	name: string;
	slug: string;
};

export const TagItem = ({ tag }: { tag: TagType }) => {
	return (
		<div className="border-[1px] border-border rounded-full text-xs py-1 px-2">
			<Link href={tag.slug}>{tag.name}</Link>
		</div>
	);
};
