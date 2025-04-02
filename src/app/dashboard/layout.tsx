import { auth } from "@/auth";
import { NoAuthSection } from "@/components/no-auth-section";
import { Session } from "next-auth";
import { ReactNode } from "react";

const DashboardLayout = async ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	const session = (await auth()) as Session;

	if (!session) return <NoAuthSection />;

	return <main>{children}</main>;
};

export default DashboardLayout;
