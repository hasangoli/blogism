"use client";

import dynamic from "next/dynamic";
import { Dispatch, SetStateAction } from "react";
import "react-quill-new/dist/quill.snow.css";

type Props = {
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
};

export const QuillEditor = ({ value, setValue }: Props) => {
	const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

	return (
		<ReactQuill
			className="border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 field-sizing-content min-h-min w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
			value={value}
			onChange={setValue}
			modules={{
				toolbar: [
					[{ header: [1, 2, false] }],
					["bold", "italic", "underline", "strike", "blockquote"],
					[
						{ list: "ordered" },
						{ list: "bullet" },
						{ indent: "-1" },
						{ indent: "+1" },
					],
					["link", "image"],
					["clean"],
				],
			}}
		/>
	);
};
