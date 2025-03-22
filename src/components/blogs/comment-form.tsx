"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
	message: z.string().min(1, {
		message: "نظر شما باید حداقل شامل ۱ کاراکتر باشد.",
	}),
});

export const CommentForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			message: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<Card className="">
					<CardHeader>
						<CardTitle>ارسال نظر</CardTitle>
					</CardHeader>
					<CardContent>
						<FormField
							control={form.control}
							name="message"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Textarea placeholder="متن نظر شما" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</CardContent>
					<CardFooter className="flex justify-end">
						<Button type="submit">ارسال نظر</Button>
					</CardFooter>
				</Card>
			</form>
		</Form>
	);
};
