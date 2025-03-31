"use client";

import { googleLogIn } from "@/lib/api";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export const RegisterForm = () => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<Card>
			<CardHeader>
				<form action={googleLogIn} className="mb-8">
					<Button
						type="submit"
						className="flex justify-between w-full py-8 text-lg">
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
					<Input
						dir="ltr"
						id="email"
						type="email"
						autoComplete="off"
						placeholder="user@google.com"
					/>
				</div>
				<div className="space-y-1">
					<Label htmlFor="password">رمز عبور</Label>
					<div className="relative">
						<Input
							dir="ltr"
							id="password"
							type={showPassword ? "text" : "password"}
							autoComplete="off"
							placeholder="********"
						/>
						<Button
							type="button"
							variant="ghost"
							size="sm"
							className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
							onClick={() => setShowPassword(prev => !prev)}>
							{showPassword ? (
								<EyeIcon className="h-4 w-4" aria-hidden="true" />
							) : (
								<EyeOffIcon className="h-4 w-4" aria-hidden="true" />
							)}
						</Button>
					</div>
				</div>
				<div className="space-y-1">
					<Label htmlFor="passwordConfirmation">تکرار رمز عبور</Label>
					<div className="relative">
						<Input
							dir="ltr"
							id="passwordConfirmation"
							type={showPassword ? "text" : "password"}
							autoComplete="off"
							placeholder="********"
						/>
						<Button
							type="button"
							variant="ghost"
							size="sm"
							className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
							onClick={() => setShowPassword(prev => !prev)}>
							{showPassword ? (
								<EyeIcon className="h-4 w-4" aria-hidden="true" />
							) : (
								<EyeOffIcon className="h-4 w-4" aria-hidden="true" />
							)}
						</Button>
					</div>
				</div>
			</CardContent>
			<CardFooter className="flex justify-center">
				<Button>ثبت نام</Button>
			</CardFooter>
		</Card>
	);
};
