import { auth } from "@/auth";
import { AppBreadcrumb } from "@/components/layout/dashboard/app-breadcrumb";
import { ProfileForm } from "@/components/layout/dashboard/profile/profile-form";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Session } from "next-auth";

const UserProfilePage = async () => {
	const { user } = (await auth()) as Session;

	return (
		<>
			<AppBreadcrumb
				pageTitle="پروفایل"
				links={[{ path: "/", title: "داشبورد" }]}
			/>
			<section className="py-8">
				<Card>
					<CardHeader>
						<CardTitle>فرم ویرایش پروفایل</CardTitle>
						<CardDescription className="mb-3">
							اطلاعات مورد نیاز را در این بخش تغییر دهید
						</CardDescription>
						<hr />
					</CardHeader>
					<CardContent>
						<ProfileForm user={user} />
					</CardContent>
				</Card>
			</section>
		</>
	);
};

export default UserProfilePage;
