import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

export const AuthorBlogsPagination = () => {
	return (
		<div className="mt-8 flex justify-center">
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="/authors/1?page=1" />
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="/authors/1?page=2">2</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="/authors/1?page=3" isActive>
							3
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="/authors/1?page=4">4</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="/authors/1?page=5" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
};
