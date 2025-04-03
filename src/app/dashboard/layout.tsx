import { auth } from "@/auth";
import { AppSidebar } from "@/components/layout/dashboard/app-sidebar";
import { NoAuthSection } from "@/components/no-auth-section";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { fetchSettings } from "@/lib/api";
import { Session } from "next-auth";
import { ReactNode } from "react";
import { Settings } from "../../../generated/prisma";

const DashboardLayout = async ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => {
	const session = (await auth()) as Session;

	if (!session) return <NoAuthSection />;

	const settings = (await fetchSettings()) as Settings;

	return (
		<SidebarProvider defaultOpen={false}>
			<AppSidebar settings={settings} session={session} />
			<main className="container">
				<SidebarTrigger />
				{children}
			</main>
		</SidebarProvider>
	);
};

export default DashboardLayout;
