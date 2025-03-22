import { AuthorList } from "@/components/authors/author-list";
import { AuthorsPagination } from "@/components/authors/authors-pagination";

const AuthorsPage = () => {
	return (
		<section className="container py-8">
			<AuthorList />
			<AuthorsPagination />
		</section>
	);
};

export default AuthorsPage;
