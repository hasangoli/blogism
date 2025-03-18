import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsLetter = () => {
	return (
		<section className="container my-12">
			<div className="text-center mb-4">
				<p className="text-3xl font-bold mb-4">عضو خبرنامه شوید</p>
				<p>برای دریافت آخرین مقالات، آدرس ایمیل خود را وارد کنید</p>
			</div>
			<form className="flex flex-col gap-3">
				<Input type="email" placeholder="name@domain.com" className="text-center" />
				<Button className="w-full">ثبت نام</Button>
			</form>
		</section>
	);
};
