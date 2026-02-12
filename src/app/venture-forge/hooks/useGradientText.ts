"use client";

import { useMemo } from "react";

export const useGradientText = (shimmer = false) => {
  return useMemo(() => ({
    className: `bg-clip-text text-transparent bg-gradient-to-r from-white to-[#007BFF] ${shimmer ? "animate-shimmer bg-[length:200%_auto]" : ""}`,
  }), [shimmer]);
};
