import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainLayoutChild from "@/components/layouts/mainLayoutChild";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Codebase | Home",
    description: "A place for all your code.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MainLayoutChild>{children}</MainLayoutChild>
            </body>
        </html>
    );
}
