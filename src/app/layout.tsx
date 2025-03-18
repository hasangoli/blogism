import Providers from "@/providers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const iranSans = localFont({
	src: "../fonts/IRANSans.ttf",
	display: "swap",
});

export const metadata: Metadata = {
	title: "blogism",
	description: "blogists utopia",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fa" dir="rtl" suppressHydrationWarning>
			<body className={iranSans.className}>
				<Providers
					dir="rtl"
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					{children}
				</Providers>
			</body>
		</html>
	);
}
