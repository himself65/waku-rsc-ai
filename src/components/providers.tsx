"use client";

import * as React from "react";

import { TooltipProvider } from "./ui/tooltip";

export function Providers({ children }: React.PropsWithChildren) {
  return <TooltipProvider delayDuration={0}>{children}</TooltipProvider>;
}
