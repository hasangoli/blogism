import { Avatar } from "@/components/ui/avatar";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { googleLogOut } from "@/lib/api";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { BookOpenText, Gauge, LogOut, UserRoundPen } from "lucide-react";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { Settings } from "../../../../generated/prisma";
import { Logo } from "../logo";

const userMenuItems = [
	{
		title: "داشبورد",
		url: "/dashboard",
		icon: Gauge,
	},
	{
		title: "مقالات",
		url: "/dashboard/blogs",
		icon: BookOpenText,
	},
	{
		title: "پروفایل",
		url: "/dashboard/profile",
		icon: UserRoundPen,
	},
];

type Props = {
	settings: Settings;
	session: Session;
};

export const AppSidebar = ({ settings, session }: Props) => {
	return (
		<Sidebar side="right" variant="floating" collapsible="icon">
			<SidebarHeader>
				<SidebarMenuButton
					size="lg"
					className="h-auto group-data-[collapsible=icon]:hidden">
					<Logo
						logo={settings?.headerLogo}
						darkLogo={settings?.headerDarkLogo}
						name={settings?.siteName}
						className="w-[100px] mx-auto max-w-full"
						target="_blank"
					/>
				</SidebarMenuButton>
				<SidebarMenuButton
					size="lg"
					className="h-auto hidden group-data-[collapsible=icon]:block">
					<Logo
						logo={settings?.smallLogo}
						darkLogo={settings?.smallDarkLogo}
						name={settings?.siteName}
						className="max-w-full"
						target="_blank"
					/>
				</SidebarMenuButton>
				<hr />
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{userMenuItems?.map(item => (
								<SidebarMenuItem key={item?.url}>
									<SidebarMenuButton asChild>
										<Link href={item?.url}>
											<item.icon />
											<span>{item?.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
							<SidebarMenuItem>
								<SidebarMenuButton asChild>
									<Link href="#" onClick={googleLogOut}>
										<LogOut />
										<span>خروج</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				{/* <SidebarMenu> */}
				{/* <SidebarMenuItem> */}
				<SidebarMenuButton
					size="lg"
					className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
					<Avatar className="h-8 w-8 rounded-full">
						{session?.user?.image && session?.user?.name ? (
							<Image
								src={session?.user?.image}
								alt={session?.user?.name}
								width={40}
								height={40}
							/>
						) : (
							<AvatarFallback>
								<Image src="/images/avatar.png" alt="" width={40} height={40} />
							</AvatarFallback>
						)}
					</Avatar>
					<div className="grid flex-1 text-start text-sm leading-tight">
						<span className="truncate font-medium">{session?.user?.name}</span>
						<span className="truncate text-xs text-muted-foreground">
							{session?.user?.email}
						</span>
					</div>
				</SidebarMenuButton>
				{/* </SidebarMenuItem> */}
				{/* </SidebarMenu> */}
			</SidebarFooter>
		</Sidebar>
	);
};
