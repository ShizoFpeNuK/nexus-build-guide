"use client";

import { CacheProvider } from "@emotion/react";
import type { FC, ReactNode } from "react";
import createCache from "@emotion/cache";

const cache = createCache({
	key: "css",
	prepend: true,
});

const EmotionCacheProvider: FC<{ children: ReactNode }> = ({ children }) => {
	return <CacheProvider value={cache}>{children}</CacheProvider>;
};

export default EmotionCacheProvider;
