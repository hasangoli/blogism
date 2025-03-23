import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";

export const AuthorItem = () => {
	return (
		<Card>
			<CardContent>
				<Link
					href="/authors/1"
					className="flex flex-col gap-4 items-center justify-center">
					<div className="relative aspect-square w-[100px]">
						<Image
							src="/images/test.jpg"
							alt="author"
							fill
							className="rounded-full border-2 border-border"
						/>
					</div>
					<p className="text-lg font-bold">حسن گلی</p>
					<p className="text-sm text-center">25 مقاله</p>
				</Link>
			</CardContent>
		</Card>
	);
};
