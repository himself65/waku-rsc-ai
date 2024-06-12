import "../styles.css";

import type { ReactNode } from "react";

import { Header } from "../components/header";
import { createAI } from "ai/rsc";
import { confirmPurchase, submitUserMessage } from "../actions";
import { TooltipProvider } from "../components/ui/tooltip";

const initialAIState: {
  role: "user" | "assistant" | "system" | "function";
  content: string;
  id?: string;
  name?: string;
}[] = [];

const initialUIState: {
  id: number;
  display: ReactNode;
}[] = [];

export const AI = createAI({
  actions: {
    submitUserMessage,
    confirmPurchase,
  },
  initialUIState,
  initialAIState,
});

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();
  return (
    <div className="font-sans">
      <meta property="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <AI>
        <TooltipProvider>
          <Header />
          <main className="flex flex-col flex-1 bg-muted/50 dark:bg-background">
            {children}
          </main>
        </TooltipProvider>
      </AI>
    </div>
  );
}

const getData = async () => {
  const data = {
    description: "An internet website!",
    icon: "/images/favicon.png",
  };

  return data;
};
