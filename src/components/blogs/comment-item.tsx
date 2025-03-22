import { Card, CardContent, CardHeader } from "../ui/card";

export const CommentItem = () => {
	return (
		<Card className="gap-2">
			<CardHeader className="flex items-center justify-between">
				<p className="mb-0 text-lg font-bold">حسن گلی</p>
				<p className="mb">1403/12/06</p>
			</CardHeader>
			<CardContent>
				<p className="text-sm text-justify">
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
					استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
					ستون و سطرآنچنان که لازم است.
				</p>

				<Card className="gap-2 mt-6">
					<CardHeader className="flex items-center justify-between">
						<p className="mb-0 text-lg font-bold">ادمین</p>
						<p className="mb">1403/12/06</p>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-justify">
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
						</p>
					</CardContent>
				</Card>
			</CardContent>
		</Card>
	);
};
