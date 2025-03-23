import { AuthorBlogs } from "@/components/authors/author-blogs";
import { AuthorBlogsPagination } from "@/components/authors/author-blogs-pagination";
import { AuthorDetails } from "@/components/authors/author-details";

const AuthorPage = () => {
	return (
		<>
			<AuthorDetails />
			<AuthorBlogs />
			<AuthorBlogsPagination />
		</>
	);
};

export default AuthorPage;
