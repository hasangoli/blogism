import { AuthorItem } from "@/components/author-item";
import { BlogItem } from "@/components/blogs/blog-item";
import { CategoryItem } from "@/components/blogs/category-item";
import { CommentForm } from "@/components/blogs/comment-form";
import { TagItem } from "@/components/blogs/tag-item";
import { Separator } from "@/components/ui/separator";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const BlogPage = () => {
	return (
		<>
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
						<AuthorItem
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
			<article className="container lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mt-8 ugc-content">
				<p>
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
					استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
					ستون و سطر آنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
					کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
					در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
					طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
					الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
					صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
					شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
					اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
					قرار گیرد.
				</p>
				<h2>لورم ایپسوم متن</h2>
				<ul>
					<li>لورم ایپسوم متن</li>
					<li>لورم ایپسوم متن</li>
					<li>لورم ایپسوم متن</li>
					<li>لورم ایپسوم متن</li>
					<li>لورم ایپسوم متن</li>
					<li>لورم ایپسوم متن</li>
				</ul>
				<Image src="/images/test.jpg" alt="" width={1500} height={2000} />
			</article>
			<section className="container lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mt-6">
				<Separator className="mb-4" />
				<ul className="flex items-center h-7 gap-3">
					<li>
						<TagItem tag={{ name: "برچسب", slug: "" }} />
					</li>
					<Separator orientation="vertical" />
					<li>
						<TagItem tag={{ name: "برچسب", slug: "" }} />
					</li>
					<Separator orientation="vertical" />
					<li>
						<TagItem tag={{ name: "برچسب", slug: "" }} />
					</li>
				</ul>
				<ul className="flex items-center gap-3 mt-4">
					<li className="text-sm">اشتراک گذاری:</li>
					<li>
						<a href="#" target="_blank" rel="noreferrer">
							<Twitter size={20} />
						</a>
					</li>
					<li>
						<a href="#" target="_blank" rel="noreferrer">
							<Facebook size={20} />
						</a>
					</li>
					<li>
						<a href="#" target="_blank" rel="noreferrer">
							<Linkedin size={20} />
						</a>
					</li>
				</ul>
			</section>
			<section className="container lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mt-6">
				<h2 className="text-2xl font-bold mb-4">نظرات (3)</h2>
				<CommentForm/>
			</section>
			<section className="container mt-6">
				<h2 className="text-2xl font-bold mb-4">موارد مشابه</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
					{[1, 2, 3, 4].map(blog => (
						<BlogItem key={blog} />
					))}
				</div>
			</section>
		</>
	);
};

export default BlogPage;
