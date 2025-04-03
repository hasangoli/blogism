"use client";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { PanelRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

type Props = {
	pageTitle?: string;
	links: {
		path: string;
		title: string;
	}[];
};

export const AppBreadcrumb = ({ pageTitle, links }: Props) => {
	const { toggleSidebar } = useSidebar();
	const pathname = usePathname();

	return (
		<>
			<Breadcrumb className="py-4">
				<BreadcrumbList>
					<BreadcrumbItem>
						<Button onClick={toggleSidebar}>
							<PanelRight />
						</Button>
					</BreadcrumbItem>
					{links?.map((link, index) => (
						<Fragment key={index}>
							{index ? <BreadcrumbSeparator>/</BreadcrumbSeparator> : null}
							<BreadcrumbItem>
								<BreadcrumbLink href={link.path}>{link.title}</BreadcrumbLink>
							</BreadcrumbItem>
						</Fragment>
					))}
					{pathname !== "/dashboard" ? (
						<BreadcrumbSeparator>/</BreadcrumbSeparator>
					) : null}
					<BreadcrumbItem>
						<BreadcrumbPage>{pageTitle}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<hr />
		</>
	);
};
