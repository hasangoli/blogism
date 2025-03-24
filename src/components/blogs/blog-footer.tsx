import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Separator } from "../ui/separator";

export const BlogFooter = () => {
	return (
		<section className="container lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mt-6">
			<Separator className="mb-4" />
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
	);
};
