import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
// import { Inter } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provide";
const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Care pluse",
  description: "A health care management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
      >

        <body className={cn("min-h-screen bg-dark-300 ont-sans antialiased", fontSans.variable)}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
