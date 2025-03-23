"use client";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "../ui/form";

const formSchema = z.object({
	query: z.string().min(1, {
		message: "متن جستجو باید حداقل شامل ۱ کاراکتر باشد.",
	}),
});

export const SearchDialog = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			query: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost">
					<Search />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle className="text-center">جستجو</DialogTitle>
					<DialogDescription className="text-center">
						عبارت مدنظر خود را وارد کنید
					</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form
						className="flex items-start space-x-2"
						onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name="query"
							render={({ field }) => (
								<FormItem className="grid flex-1">
									<FormControl>
										<Input
											type="text"
											placeholder="جست و جو ..."
											autoComplete="off"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" size="sm">
							<Search />
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};
