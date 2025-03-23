import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";

export const AuthorDetails = () => {
	return (
		<section className="container py-8">
			<Card>
				<CardContent className="grid grid-cols-12 items-center gap-4">
					<div className="col-span-12 sm:col-span-3 lg:col-span-2 flex justify-center">
						<Image
							src="/images/test.jpg"
							alt="author"
							width={200}
							height={200}
							className="aspect-square object-cover object-center rounded-full border-2 border-border"
						/>
					</div>
					<div className="flex flex-col col-span-12 sm:col-span-9 lg:col-span-10 gap-2">
						<h1 className="text-2xl font-bold">حسن گلی</h1>
						<p className="text-sm">29 مقاله</p>
						<ul className="flex justify-end gap-2">
							<li>
								<a href="#">
									<Twitter size={20} />
								</a>
							</li>
							<li>
								<a href="#">
									<Linkedin size={20} />
								</a>
							</li>
							<li>
								<a href="#">
									<Facebook size={20} />
								</a>
							</li>
							<li>
								<a href="#">
									<Instagram size={20} />
								</a>
							</li>
						</ul>
					</div>
					<p className="text-sm text-justify col-span-12">
						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
						استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
						ستون و سطر آنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
						و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
						زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
						متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
						رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
						کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
						راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
						حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
						طراحی اساسا مورد استفاده قرار گیرد.
					</p>
				</CardContent>
			</Card>
		</section>
	);
};
