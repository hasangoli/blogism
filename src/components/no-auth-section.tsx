import { googleLogIn } from "@/lib/api";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

export const NoAuthSection = () => {
	return (
		<main>
			<section className="container py-8">
				<Card className="w-[500px] max-w-full mx-auto mb-4">
					<CardHeader>
						<h1 className="text-center text-2xl font-bold">پنل کاربری</h1>
					</CardHeader>
					<CardContent className="space-y-2 flex flex-col items-center gap-4">
						<p>برای مشاهده این صفحه باید وارد حساب کاربری خود شوید</p>
						<form action={googleLogIn} className="mb-8">
							<Button
								type="submit"
								className="flex justify-between py-8 text-lg">
								ورود با گوگل
								<Image
									src="/images/google.svg"
									alt="google"
									width={20}
									height={20}
								/>
							</Button>
						</form>
					</CardContent>
				</Card>
			</section>
		</main>
	);
};
