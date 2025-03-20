import { BlogItem } from "../blog-item";

export const FeaturedBlogs = () => {
	return (
		<section className="container py-8">
			<h2 className="text-2xl font-bold">برترین مقالات</h2>
			<div className="mt-8 grid grid-cols-12 gap-4">
				<BlogItem
					className="col-span-12 lg:col-span-9"
					cardClassName="h-full"
				/>
				<div className="grid grid-cols-2 gap-4 col-span-12 lg:col-span-3">
					<BlogItem className="col-span-2 sm:col-span-1 lg:col-span-2" />
					<BlogItem className="col-span-2 sm:col-span-1 lg:col-span-2" />
				</div>
			</div>
		</section>
	);
};
