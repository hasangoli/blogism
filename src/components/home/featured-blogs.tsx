import { BlogItem } from "../blog-item";

export const FeaturedBlogs = () => {
	return (
		<section className="container py-8">
			<h2 className="text-xl">برترین مقالات</h2>
			<div className="mt-8 grid grid-cols-1 gap-4">
				<BlogItem />
				<BlogItem />
				<BlogItem />
			</div>
		</section>
	);
};
