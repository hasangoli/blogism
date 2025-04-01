import { Toaster } from "@/components/ui/sonner";
import Providers from "@/providers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import "./globals.css";

const iranSans = localFont({
	src: "../fonts/IRANSans.ttf",
	display: "swap",
});

export const metadata: Metadata = {
	title: "بلاگیسم",
	description: "برترین پلتفرم فارسی زبان برای انتشار محتوا و مقالات شما",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="fa" dir="rtl" suppressHydrationWarning>
			<body className={iranSans.className}>
				<Providers
					dir="rtl"
					attribute="class"
					enableSystem
					defaultTheme="system"
					disableTransitionOnChange>
					{children}
				</Providers>
				<Toaster />
			</body>
		</html>
	);
}
