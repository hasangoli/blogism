import { CommentItem } from "./comment-item";

export const CommentList = () => {
	return (
		<>
			<h2 className="text-2xl font-bold mt-4">نظرات (3)</h2>
			<ul className="flex flex-col gap-4">
				<li>
					<CommentItem />
				</li>
			</ul>
		</>
	);
};
