import Image from "next/image";
import { Separator } from "../ui/separator";
import { BlogsAuthor } from "./blogs-author";
import { CategoryItem } from "./category-item";

export const BlogDetails = () => {
	return (
		<section className="container lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
			<div className="relative aspect-video w-full my-4">
				<Image
					src="/images/test.jpg"
					alt="نام یا موضوع مقاله"
					fill
					className="rounded-md"
				/>
			</div>
			<ul className="flex items-center h-7 gap-3">
				<li>
					<BlogsAuthor
						href="/authors/1"
						src="/images/test.jpg"
						fullName="حسن گلی"
						dimension={35}
					/>
				</li>
				<Separator orientation="vertical" />
				<li>
					<CategoryItem category={{ name: "دسته بندی", slug: "" }} />
				</li>
				<Separator orientation="vertical" />
				<li className="text-xs">1403/09/21</li>
			</ul>
			<h1 className="text-2xl font-bold mt-4">نام یا موضوع مقاله</h1>
		</section>
	);
};
