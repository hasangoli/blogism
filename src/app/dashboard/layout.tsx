import { auth } from "@/auth";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const DashboardLayout = async ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	const session = await auth() as Session;

	if (!session || !session?.user) redirect("/login");

	return <main>{children}</main>;
};

export default DashboardLayout;
