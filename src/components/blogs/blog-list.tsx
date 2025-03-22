import { BlogItem } from "./blog-item";

export const BlogList = () => {
	return (
		<>
			<h2 className="text-2xl font-bold">همه مقالات</h2>
			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(blog => (
					<BlogItem key={blog} />
				))}
			</div>
		</>
	);
};
