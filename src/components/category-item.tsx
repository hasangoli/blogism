import Link from "next/link";

export type CategoryType = {
	name: string;
	slug: string;
};

export const CategoryItem = ({ category }: { category: CategoryType }) => {
	return (
		<div className="border-[1px] border-border rounded-full text-xs py-1 px-2">
			<Link href={category.slug}>{category.name}</Link>
		</div>
	);
};
