import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import { Providers } from "@/components/Providers";
const inter = Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "ask-this-site",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "min-h-screen antialiased")}
      >
        <Providers>
        <main className="h-screen white text-foreground bg-red-700">
          {children}
        </main>
        </Providers>
      </body>
    </html>
  );
}
