import type { Metadata } from "next";
import { Inter, Fira_Code } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import React from "react";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const firaCode = Fira_Code({
    subsets: ["latin"],
    variable: "--font-fira-code",
});

export const metadata: Metadata = {
    title: "Charnchol Panusupanirun | Backend Developer",
    description: "Portfolio of Charnchol Panusupanirun, a Backend Developer specializing in TypeScript, Golang, and Java.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
            storageKey="portfolio-theme"
        >
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}