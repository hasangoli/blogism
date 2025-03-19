import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { NewsLetter } from "@/components/layout/news-letter";
import React from "react";

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<NewsLetter />
			<Footer />
		</>
	);
};

export default RootLayout;
