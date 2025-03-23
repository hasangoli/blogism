"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	fullName: z
		.string()
		.min(1, { message: "وارد کردن نام و نام خانوادگی الزامی است" }),
	email: z
		.string()
		.min(1, { message: "وارد کردن ایمیل الزامی است" })
		.email({ message: "آدرس ایمیل اشتباه است" }),
	message: z.string().min(1, { message: "وارد کردن پیام الزامی است" }),
});

export const ContactForm = ({ className }: { className?: string }) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			fullName: "",
			email: "",
			message: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={cn("grid grid-cols-1 sm:grid-cols-2 gap-8", className)}>
				<FormField
					control={form.control}
					name="fullName"
					render={({ field }) => (
						<FormItem className="sm:col-span-1">
							<FormControl>
								<Input
									type="text"
									placeholder="حسن گلی"
									autoComplete="off"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="sm:col-span-1">
							<FormControl>
								<Input
									type="email"
									placeholder="name@domain.com"
									autoComplete="off"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="message"
					render={({ field }) => (
						<FormItem className="sm:col-span-2">
							<FormControl>
								<Textarea
									placeholder="متن پیام شما ..."
									autoComplete="off"
									rows={5}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="sm:col-span-2 flex justify-end">
					<Button type="submit">ارسال پیام</Button>
				</div>
			</form>
		</Form>
	);
};
