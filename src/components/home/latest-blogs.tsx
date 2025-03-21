import Link from "next/link";
import { Button } from "../ui/button";
import { BlogItem } from "../blogs/blog-item";

const LatestBlogs = () => {
	return (
		<section className="container py-8">
			<h2 className="text-2xl font-bold">آخرین مقالات</h2>
			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 col-span-12 lg:col-span-3">
				{[1, 2, 3, 4, 5, 6].map(blog => (
					<BlogItem key={blog} />
				))}
			</div>
			<div className="mt-8 flex justify-center">
				<Button className="px-12">
					<Link href="/blogs">همه مقالات</Link>
				</Button>
			</div>
		</section>
	);
};

export default LatestBlogs;
