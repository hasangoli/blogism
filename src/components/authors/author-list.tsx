import { AuthorItem } from "./author-item";

export const AuthorList = () => {
	return (
		<>
			<h2 className="text-2xl font-bold">همه نویسندگان</h2>
			<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(author => (
					<AuthorItem key={author} />
				))}
			</div>
		</>
	);
};
