import type { Metadata } from "next";
import "./globals.css";
import Bubbles from "@/components/svg/Bubbles";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Built With Next, TypeScript & Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[#F0F4F3] overflow-hidden`}
      >
        <Suspense
          fallback={
            <div className="text-teal-500 font-bold text-xl sm:text-2xl w-screen h-screen flex justify-center items-center">
              <span> Loading... </span>
            </div>
          }
        >
          <Bubbles />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
