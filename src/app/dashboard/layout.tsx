import { auth } from "@/auth";
import { NoAuthSection } from "@/components/no-auth-section";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const DashboardLayout = async ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	const session = (await auth()) as Session;

	if (!session) return <NoAuthSection />;

	if (session && session?.user?.type === "ADMIN") redirect("/admin");

	return <main>{children}</main>;
};

export default DashboardLayout;
