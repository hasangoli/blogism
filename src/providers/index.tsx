import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";
import DirectionProvider, { Direction } from "./direction-provider";

const Providers = ({
	children,
	dir,
	...props
}: Omit<React.ComponentProps<typeof NextThemesProvider>, "dir"> & {
	dir: Direction;
}) => {
	return (
		<DirectionProvider dir={dir}>
			<NextThemesProvider {...props}>{children}</NextThemesProvider>
		</DirectionProvider>
	);
};

export default Providers;
