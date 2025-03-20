import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { AuthorItem } from "./author-item";
import { CategoryItem } from "./category-item";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export const BlogItem = ({
	className,
	cardClassName,
}: {
	className?: string;
	cardClassName?: string;
}) => {
	return (
		<article className={className}>
			<Card className={cn("p-3 gap-3", cardClassName)}>
				<CardHeader className="p-0">
					<Link href="/blogs/1">
						<CardTitle className="line-clamp-1 leading-6 mb-3">
							نام یا موضوع مقاله
						</CardTitle>
					</Link>
					<ul className="flex items-center h-7 gap-3">
						<li>
							<AuthorItem
								href="/blogs/1"
								src="/images/test.jpg"
								fullName="حسن گلی"
							/>
						</li>
						<Separator orientation="vertical" />
						<li>
							<CategoryItem category={{ name: "دسته بندی", slug: "" }} />
						</li>
					</ul>
				</CardHeader>
				<CardContent className="relative w-full aspect-video">
					<Link href="/blogs/1">
						<Image
							src="/images/test.jpg"
							alt="Blog Image"
							fill
							className="rounded-md"
						/>
					</Link>
				</CardContent>
				<CardFooter className="p-0 flex flex-col items-end">
					<p className="text-sm text-justify line-clamp-2">
						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
						استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
						ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
						و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
						زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
						متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
						رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
						کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
						راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
						حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
						طراحی اساسا مورد استفاده قرار گیرد.
					</p>
					<Button type="button" className="mt-3 text-end">
						<Link href="/blogs/1">مطالعه</Link>
					</Button>
				</CardFooter>
			</Card>
		</article>
	);
};
