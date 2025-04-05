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
import { Textarea } from "@/components/ui/textarea";
import { updateProfile } from "@/lib/api";
import { profileSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { User } from "../../../../../generated/prisma";

export const ProfileForm = ({ user }: { user: User }) => {
	const form = useForm<z.infer<typeof profileSchema>>({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			id: user?.id,
			name: user?.name || "",
			description: user?.description || "",
			twitter: user?.twitter || "",
			linkedIn: user?.linkedIn || "",
			facebook: user?.facebook || "",
			instagram: user?.instagram || "",
			telegram: user?.telegram || "",
		},
	});

	const onSubmit = async (values: z.infer<typeof profileSchema>) => {
		const response = await updateProfile(values);
		if (response.success) {
			toast.success(response.message);
		} else {
			toast.error(response.message);
		}
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
				<div className="grid lg:grid-cols-2 gap-7">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>نام و نام خانوادگی</FormLabel>
								<FormControl>
									<Input
										type="text"
										placeholder="نام و نام خانوادگی"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="image"
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									تصویر پروفایل <small>(100px * 100px)</small>
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
						name="description"
						render={({ field }) => (
							<FormItem className="lg:col-span-2">
								<FormLabel>درباره من</FormLabel>
								<FormControl>
									<Textarea
										placeholder="توضیحاتی مختصر درباره من"
										{...field}></Textarea>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<hr />
				<div className="grid lg:grid-cols-2 gap-7">
					<FormField
						control={form.control}
						name="telegram"
						render={({ field }) => (
							<FormItem>
								<FormLabel>لینک تلگرام</FormLabel>
								<FormControl>
									<Input type="text" placeholder="لینک تلگرام" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="instagram"
						render={({ field }) => (
							<FormItem>
								<FormLabel>لینک اینستاگرام</FormLabel>
								<FormControl>
									<Input type="text" placeholder="لینک اینستاگرام" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="linkedIn"
						render={({ field }) => (
							<FormItem>
								<FormLabel>لینک لینکدین</FormLabel>
								<FormControl>
									<Input type="text" placeholder="لینک لینکدین" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="twitter"
						render={({ field }) => (
							<FormItem>
								<FormLabel>لینک ایکس (توییتر)</FormLabel>
								<FormControl>
									<Input
										type="text"
										placeholder="لینک ایکس (توییتر)"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="facebook"
						render={({ field }) => (
							<FormItem>
								<FormLabel>لینک فیسبوک</FormLabel>
								<FormControl>
									<Input type="text" placeholder="لینک فیسبوک" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<hr />
				<div className="flex justify-end">
					<Button type="submit">ثبت اطلاعات</Button>
				</div>
			</form>
		</Form>
	);
};
