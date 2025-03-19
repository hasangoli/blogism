import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsLetter = () => {
	return (
		<section className="container my-12 md:grid md:grid-cols-2 md:gap-x-8">
			<div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
				<p className="text-2xl font-bold mb-4">عضو خبرنامه شوید</p>
				<p className="md:text-sm">برای دریافت آخرین مقالات، آدرس ایمیل خود را وارد کنید</p>
			</div>
			<form className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:items-center">
				<Input type="email" placeholder="name@domain.com" className="text-center lg:col-span-3" />
				<Button className="w-full">ثبت نام</Button>
			</form>
		</section>
	);
};
