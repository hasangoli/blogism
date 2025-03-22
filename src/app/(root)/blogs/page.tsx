import { BlogList } from "@/components/blogs/blog-list";
import { BlogsPagination } from "@/components/blogs/blogs-pagination";

const BlogsPage = () => {
	return (
		<section className="container py-8">
			<BlogList />
			<BlogsPagination />
		</section>
	);
};

export default BlogsPage;
