import { auth } from "@/auth";
import { AppBreadcrumb } from "@/components/layout/dashboard/app-breadcrumb";
import { CreateBlogForm } from "@/components/layout/dashboard/blogs/create-blog-form";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { Session } from "next-auth";
import { Category } from "../../../../../generated/prisma";

const UserCreateBlogPage = async () => {
	const {
		user: { id },
	} = (await auth()) as Session;
	const categories: Category[] = await prisma.category.findMany();

	return (
		<>
			<AppBreadcrumb
				pageTitle="ایجاد مقاله"
				links={[
					{ path: "/", title: "داشبورد" },
					{ path: "/dashboard/blogs", title: "مقالات" },
				]}
			/>
			<section className="py-8">
				<Card>
					<CardHeader>
						<CardTitle>فرم ایجاد مقاله</CardTitle>
						<CardDescription className="mb-3">
							جهت افزودن مقاله فرم زیر را با دقت تکمیل کنید
						</CardDescription>
						<hr />
					</CardHeader>
					<CardContent>
						<CreateBlogForm userId={id} categories={categories} />
					</CardContent>
				</Card>
			</section>
		</>
	);
};

export default UserCreateBlogPage;
