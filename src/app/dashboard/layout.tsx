import { auth } from "@/auth";
import { AppSidebar } from "@/components/layout/dashboard/app-sidebar";
import { NoAuthSection } from "@/components/no-auth-section";
import { SidebarProvider } from "@/components/ui/sidebar";
import { fetchSettings } from "@/lib/api";
import { Session } from "next-auth";
import { cookies } from "next/headers";
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

	const cookieStore = await cookies();
	const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

	return (
		<SidebarProvider defaultOpen={defaultOpen}>
			<AppSidebar settings={settings} session={session} />
			<main className="container">{children}</main>
		</SidebarProvider>
	);
};

export default DashboardLayout;
