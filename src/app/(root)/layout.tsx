import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { NewsLetter } from "@/components/layout/news-letter";
import { fetchSettings } from "@/lib/api";
import type { Settings } from "../../../generated/prisma";
import React from "react";

const RootLayout = async ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const settings = (await fetchSettings()) as Settings;

	return (
		<>
			<Header settings={settings} />
			<main>{children}</main>
			<NewsLetter />
			<Footer settings={settings} />
		</>
	);
};

export default RootLayout;
