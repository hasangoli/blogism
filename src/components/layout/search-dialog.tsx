import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export const SearchDialog = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost">
					<Search />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle className="text-center">جستجو</DialogTitle>
					<DialogDescription className="text-center">
						عبارت مدنظر خود را وارد کنید
					</DialogDescription>
				</DialogHeader>
				<form className="flex items-center space-x-2">
					<div className="grid flex-1 gap-2">
						<Input type="text" placeholder="جست و جو ..." />
					</div>
					<Button type="submit" size="sm">
						<Search />
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
};
