import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { googleLogIn } from "@/lib/api";
import Image from "next/image";

const AuthPage = () => {
	return (
		<section className="container py-8 flex justify-center">
			<Tabs defaultValue="logIn" className="w-[400px]">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="logIn">ورود</TabsTrigger>
					<TabsTrigger value="signUp">ثبت نام</TabsTrigger>
				</TabsList>
				<TabsContent value="logIn">
					<Card>
						<CardHeader>
							<form action={googleLogIn} className="mb-8">
								<Button
									type="submit"
									variant="outline"
									className="w-full py-5 text-lg">
									ورود با گوگل
									<Image
										src="/images/google.svg"
										alt="google"
										width={20}
										height={20}
									/>
								</Button>
							</form>
							<CardDescription>
								جهت ورود به حساب کاربری، لطفا آدرس ایمیل و رمز عبور خود را وارد
								کنید
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-2">
							<div className="space-y-1">
								<Label htmlFor="email">ایمیل</Label>
								<Input id="email" type="email" />
							</div>
							<div className="space-y-1">
								<Label htmlFor="password">رمز عبور</Label>
								<Input id="password" type="password" />
							</div>
						</CardContent>
						<CardFooter className="flex justify-center">
							<Button>ورود</Button>
						</CardFooter>
					</Card>
				</TabsContent>
				<TabsContent value="signUp">
					<Card>
						<CardHeader>
							<form action={googleLogIn} className="mb-8">
								<Button
									type="submit"
									variant="outline"
									className="w-full py-5 text-lg">
									ثبت نام با گوگل
									<Image
										src="/images/google.svg"
										alt="google"
										width={20}
										height={20}
									/>
								</Button>
							</form>
							<CardDescription>
								جهت ثبت نام، لطفا آدرس ایمیل و رمز دلخواه خود را وارد کنید
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-2">
							<div className="space-y-1">
								<Label htmlFor="email">ایمیل</Label>
								<Input id="email" type="email" />
							</div>
							<div className="space-y-1">
								<Label htmlFor="password">رمز عبور</Label>
								<Input id="password" type="password" />
							</div>
							<div className="space-y-1">
								<Label htmlFor="passwordConfirmation">تکرار رمز عبور</Label>
								<Input id="passwordConfirmation" type="password" />
							</div>
						</CardContent>
						<CardFooter className="flex justify-center">
							<Button>ثبت نام</Button>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</section>
	);
};

export default AuthPage;
