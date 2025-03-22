import { BlogContent } from "@/components/blogs/blog-content";
import { BlogDetails } from "@/components/blogs/blog-details";
import { BlogFooter } from "@/components/blogs/blog-footer";
import { CommentForm } from "@/components/blogs/comment-form";
import { CommentList } from "@/components/blogs/comment-list";
import { RelatedBlogs } from "@/components/blogs/related-blogs";

const BlogPage = () => {
	return (
		<>
			<BlogDetails />
			<BlogContent />
			<BlogFooter />
			<section className="container flex flex-col gap-4 lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mt-8">
				<CommentForm />
				<CommentList />
			</section>
			<RelatedBlogs />
		</>
	);
};

export default BlogPage;
