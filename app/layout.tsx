import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayoutChild from "@/components/layouts/mainLayoutChild";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Codebase",
    description: "A place for all your code.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
