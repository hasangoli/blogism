import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
} from "@/components/ui/card";
import { googleLogIn } from "@/lib/api";
import { Session } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

const LoginPage = async () => {
	const session = (await auth()) as Session;

	if (session && session?.user && session?.user) redirect("/dashboard");

	return (
		<section className="container py-8 flex justify-center">
			<Card className="w-[500px] max-w-full">
				<CardHeader>
					<CardDescription className="text-center">
						جهت ورود به پنل کاربری از طریق دسترسی جیمیل خود وارد شوید
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-2 flex justify-center">
					<form action={googleLogIn} className="mb-8">
						<Button type="submit" className="flex justify-between py-8 text-lg">
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
	);
};

export default LoginPage;
