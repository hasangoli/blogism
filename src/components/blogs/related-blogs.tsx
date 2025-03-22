import { BlogItem } from "./blog-item";

export const RelatedBlogs = () => {
	return (
		<section className="container mt-6">
			<h2 className="text-2xl font-bold mb-4">موارد مشابه</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
				{[1, 2, 3, 4].map(blog => (
					<BlogItem key={blog} />
				))}
			</div>
		</section>
	);
};
