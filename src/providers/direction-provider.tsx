"use client";

import { Direction } from "radix-ui";
import { PropsWithChildren } from "react";

export type Direction = "rtl" | "ltr";

const DirectionProvider = ({
	children,
	dir,
}: PropsWithChildren<{ dir: Direction }>) => (
	<Direction.Provider dir={dir}>{children}</Direction.Provider>
);

export default DirectionProvider;
