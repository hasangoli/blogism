import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

export const UnauthorizedSection = () => {
	return (
		<main>
			<section className="container py-8">
				<Card className="w-[500px] max-w-full mx-auto mb-4">
					<CardHeader>
						<h1 className="text-center text-7xl font-bold">401</h1>
					</CardHeader>
					<CardContent className="space-y-2 flex flex-col items-center gap-4">
						<p>شما دسترسی لازم برای مشاهده این صفحه را ندارید</p>
						<Button
							type="submit"
							className="flex justify-between py-6 text-lg"
							asChild>
							<Link href="/">صفحه اصلی</Link>
						</Button>
					</CardContent>
				</Card>
			</section>
		</main>
	);
};
