"use client";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createBlogSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Category } from "../../../../../generated/prisma";
import { QuillEditor } from "./quill-editor";

type Props = { userId: string; categories: Category[] };

export const CreateBlogForm = ({ userId, categories }: Props) => {
	const form = useForm<z.infer<typeof createBlogSchema>>({
		resolver: zodResolver(createBlogSchema),
		defaultValues: {
			title: "",
			slug: "",
			categoryId: "",
			shortDescription: "",
			content: "",
			userId: userId,
		},
	});

	const onSubmit = async (values: z.infer<typeof createBlogSchema>) => {
		console.log(values);
		// const response = await updateProfile(values);
		// if (response.success) {
		// 	toast.success(response.message);
		// } else {
		// 	toast.error(response.message);
		// }
	};

	return (
		<Form {...form}>
			<form
				className="grid grid-cols-1 gap-7"
				onSubmit={e => {
					e.preventDefault();
					form.handleSubmit(onSubmit)();
				}}
				encType="multipart/formdata">
				<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-6 gap-7">
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem className="xl:col-span-2">
								<FormLabel className="required">نام یا موضوع مقاله</FormLabel>
								<FormControl>
									<Input
										type="text"
										placeholder="نام یا موضوع مقاله"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="slug"
						render={({ field }) => (
							<FormItem className="xl:col-span-2">
								<FormLabel className="required">نامک مقاله</FormLabel>
								<FormControl>
									<Input type="text" placeholder="نامک مقاله" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="categoryId"
						render={({ field }) => (
							<FormItem className="col-span-full xl:col-span-2">
								<FormLabel className="required">دسته بندی</FormLabel>
								<FormControl>
									<Select onValueChange={field.onChange}>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="انتخاب دسته بندی" />
										</SelectTrigger>
										<SelectContent>
											{categories?.map(category => (
												<SelectItem key={category?.id} value={category?.id}>
													{category?.title}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="shortDescription"
						render={({ field }) => (
							<FormItem className="col-span-full">
								<FormLabel className="required">توضیحات کوتاه</FormLabel>
								<FormControl>
									<Textarea placeholder="توضیحات کوتاه" {...field}></Textarea>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="thumbnail"
						render={({ field }) => (
							<FormItem className="xl:col-span-3">
								<FormLabel className="required">
									تصویر شاخص <small>(100px * 100px)</small>
								</FormLabel>
								<FormControl>
									<Input
										type="file"
										accept="*/image"
										{...field}
										value={field?.value?.name}
										onChange={e => field.onChange(e.currentTarget.files)}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="featuredImage"
						render={({ field }) => (
							<FormItem className="xl:col-span-3">
								<FormLabel className="required">
									تصویر اصلی <small>(100px * 100px)</small>
								</FormLabel>
								<FormControl>
									<Input
										type="file"
										accept="*/image"
										{...field}
										value={field?.value?.name}
										onChange={e => field.onChange(e.currentTarget.files)}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="content"
						render={({ field }) => (
							<FormItem className="col-span-full">
								<FormLabel className="required">محتوا</FormLabel>
								<FormControl>
									{/* <Textarea placeholder="محتوا" {...field}></Textarea> */}
									<QuillEditor value={field.value} setValue={field.onChange} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<hr />
				<div className="grid grid-cols-1 gap-7">
					<div className="flex justify-end">
						<Button type="submit">ثبت اطلاعات</Button>
					</div>
				</div>
			</form>
		</Form>
	);
};
